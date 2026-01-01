import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Verify Turnstile token
const verifyTurnstile = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token
      })
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
};

// Owner notification email HTML
const createOwnerEmailHtml = (data: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 30px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 5px; margin: 20px 0; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1a1a2e; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 3px; border-left: 3px solid #c9a961; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛥️ New Charter Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Experience Type:</div>
            <div class="value">${data.experience || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">Preferred Date:</div>
            <div class="value">${data.date || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'No message provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This inquiry was submitted through your SV Iron Monkey website.</p>
          <p>Reply directly to ${data.email} to respond to this inquiry.</p>
        </div>
      </div>
    </body>
  </html>
`;

// Customer confirmation email HTML  
const createConfirmationEmailHtml = (data: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 40px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 5px; margin: 20px 0; }
        .highlight { background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #c9a961; margin: 20px 0; }
        .contact-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⚓ Thank You for Your Inquiry</h1>
          <p>SV Iron Monkey</p>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for your interest in chartering with SV Iron Monkey. We have received your inquiry and are excited to help you plan your perfect maritime adventure.</p>
          
          <div class="highlight">
            <h3>Your Inquiry Details:</h3>
            <p><strong>Experience Type:</strong> ${data.experience || 'Not specified'}</p>
            <p><strong>Preferred Date:</strong> ${data.date || 'Not specified'}</p>
            ${data.message ? `<p><strong>Your Message:</strong> ${data.message}</p>` : ''}
          </div>
          
          <p>Our team will review your request and get back to you within 24 hours to discuss availability, pricing, and any special requirements you may have.</p>
          
          <div class="contact-info">
            <h3>In the Meantime:</h3>
            <p>📧 <strong>Email:</strong> <a href="mailto:info@svironmonkey.nl">info@svironmonkey.nl</a></p>
            <p>📱 <strong>Phone:</strong> <a href="tel:+34689573660">+34 689 573 660</a></p>
            <p>📍 <strong>Location:</strong> La Lonja Marina, Palma de Mallorca</p>
          </div>
          
          <p>We look forward to welcoming you aboard for an unforgettable experience on the Mediterranean waters.</p>
          
          <p>Warm regards,<br>
          <strong>The SV Iron Monkey Team</strong></p>
        </div>
        <div class="footer">
          <p>This is an automated confirmation email. Please do not reply to this message.</p>
          <p>If you have any immediate questions, please contact us directly at info@svironmonkey.nl</p>
        </div>
      </div>
    </body>
  </html>
`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, experience, date, message, turnstileToken } = req.body;

    // Validate Turnstile token
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Security verification is required' });
    }

    const isTurnstileValid = await verifyTurnstile(turnstileToken);
    if (!isTurnstileValid) {
      return res.status(400).json({ error: 'Security verification failed. Please try again.' });
    }

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured');
      return res.status(500).json({ 
        error: 'Email service not configured. Please contact the administrator.' 
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const formData = { name, email, experience, date, message };

    // Send both emails
    const [ownerEmail, confirmationEmail] = await Promise.all([
      // Owner notification
      resend.emails.send({
        from: 'SV Iron Monkey <no-reply@svironmonkey.nl>',  
        to: [process.env.OWNER_EMAIL || 'dirk.w.maan@gmail.com'],
        replyTo: email,
        subject: `New Charter Inquiry from ${name}`,
        html: createOwnerEmailHtml(formData),
      }),
      // Customer confirmation
      resend.emails.send({
        from: 'SV Iron Monkey <no-reply@svironmonkey.nl>',
        to: [email],
        subject: 'Thank You for Your Charter Inquiry - SV Iron Monkey',
        html: createConfirmationEmailHtml(formData),
      }),
    ]);

    console.log('✅ Emails sent:', ownerEmail.data?.id, confirmationEmail.data?.id);

    return res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully! Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again or contact us directly.' 
    });
  }
}

