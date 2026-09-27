import dayImage from "@/assets/yacht-deck.png";
import sunsetImage from "@/assets/sunset-cruise.jpg";
import daytimeDetailImage from "@/assets/out/out3.png";
import cabinHeroImage from "@/assets/rooms/bed3.png";
import breakfastImage from "@/assets/breakfast/bf1.png";

export type CharterSlug = "day-charter" | "sunset-cruise" | "overnight-charter";

interface Charter {
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  detailImage: string;
  detailAlt: string;
  duration: string;
  mood: string;
  storyTitle: string;
  story: string;
  route: string;
  moments: { title: string; description: string }[];
  bring: string[];
  questions: { question: string; answer: string }[];
}

export const charters: Record<CharterSlug, Charter> = {
  "day-charter": {
    title: "Day Charter",
    eyebrow: "A day away from it all",
    headline: "Mallorca, at your own pace.",
    intro: "Leave the bustle of Palma behind for a private day of sailing, swimming and unhurried time together aboard SV Iron Monkey.",
    image: dayImage,
    imageAlt: "The open deck aboard SV Iron Monkey",
    detailImage: daytimeDetailImage,
    detailAlt: "The teak side deck of SV Iron Monkey overlooking a sunny Mallorca anchorage",
    duration: "Usually 8–10 hours",
    mood: "Sail · Swim · Unwind",
    storyTitle: "Your own little escape.",
    story: "Find a comfortable spot on deck, feel the breeze and let the crew take care of the sailing. Your day can be as relaxed or as active as you like, with time at anchor to swim, enjoy lunch and simply be together.",
    route: "Depart from La Lonja Marina in Palma and explore the waters of Palma Bay or the nearby coast. We choose a sheltered anchorage to suit the conditions and your group's wishes, returning to Palma after your day on the water.",
    moments: [
      { title: "Welcome aboard", description: "Meet your crew in Palma, settle in and run through the safety briefing and the plan for the day." },
      { title: "Set out to sea", description: "Enjoy the coastline from the deck as we make our way towards a suitable anchorage." },
      { title: "Make the day yours", description: "Swim, relax or ask the crew about the water activities available. Make time for lunch with your chosen food and drinks arrangements." },
      { title: "Sail back to Palma", description: "Take in the views on the return journey, arriving at the agreed time." },
    ],
    bring: ["Swimwear and a towel — towel packages are available on request", "Sun protection and a hat", "Soft, non-marking shoes", "A light layer for the breeze"],
    questions: [
      { question: "How long is a day charter?", answer: "A day charter usually lasts 8–10 hours. We agree the exact departure and return times with you before booking, so the trip fits your plans." },
      { question: "Can we swim or use the water toys?", answer: "Tell us what your group enjoys when you enquire. Swimming and water activities depend on the conditions, equipment availability and the captain's safety assessment." },
    ],
  },
  "sunset-cruise": {
    title: "Sunset Cruise",
    eyebrow: "An evening to remember",
    headline: "Stay for the golden hour.",
    intro: "A private evening on the water, a changing sky and Mallorca's coastline in the last light of the day. Share it with your favourite people.",
    image: sunsetImage,
    imageAlt: "Warm evening light over the sea",
    detailImage: dayImage,
    detailAlt: "Space to relax on the deck of SV Iron Monkey",
    duration: "An evening at sea",
    mood: "Sail · Sip · Slow down",
    storyTitle: "Let the evening unfold.",
    story: "Step aboard as the afternoon softens into evening. Find your place on deck, enjoy a drink and watch the coast change colour. Whether you are celebrating or simply spending time together, we shape the evening around you.",
    route: "We depart from La Lonja Marina and enjoy the waters around Palma Bay. The captain chooses the course to suit the weather and the available daylight, with departure timed around the season's sunset before returning to Palma.",
    moments: [
      { title: "An easy welcome", description: "Meet the crew, get comfortable and hear the plan for your evening, including a short safety briefing." },
      { title: "Palma from the water", description: "Leave the marina behind and enjoy a different view of the coastline." },
      { title: "The golden hour", description: "Relax together on deck as the light changes. Let us know in advance about drinks, bites or a special occasion." },
      { title: "An evening return", description: "Cruise back to Palma at your agreed return time, with the evening still yours to enjoy." },
    ],
    bring: ["A light jacket or warm layer", "Soft, non-marking shoes", "Your camera or phone", "Sun protection for the early evening"],
    questions: [
      { question: "What time does the cruise leave?", answer: "Departure changes with the season. We confirm the meeting time, duration and return time in your proposal so the evening is planned around sunset." },
      { question: "Can you help with a celebration?", answer: "Of course—tell us about the occasion when you enquire. We can discuss your preferred drinks, food and any special requests, with availability and costs confirmed in your quote." },
    ],
  },
  "overnight-charter": {
    title: "Overnight Charter",
    eyebrow: "More time. More possibilities.",
    headline: "Wake up somewhere beautiful.",
    intro: "Make SV Iron Monkey your home on the water. Take time to explore, linger at anchor and discover a slower rhythm around the Balearic Islands.",
    image: cabinHeroImage,
    imageAlt: "A teak-lined guest cabin with freshly prepared beds aboard SV Iron Monkey",
    detailImage: breakfastImage,
    detailAlt: "The breakfast table aboard SV Iron Monkey, set with fresh fruit, pastries and orange juice",
    duration: "A stay shaped around you",
    mood: "Explore · Stay · Discover",
    storyTitle: "A different view each morning.",
    story: "Unpack, settle into life aboard and let the days find their rhythm. There is time for a swim before breakfast, an afternoon exploring or a quiet evening together. We plan your stay around your group, your interests and the time you have.",
    route: "A shorter stay can focus on Mallorca's coast. With more time, we can discuss a wider Balearic itinerary. Distances, weather and suitable overnight stops guide the plan; we agree a realistic route together before your charter. A different pickup location can also be arranged on request, subject to the itinerary and availability. We confirm any repositioning costs in your quote.",
    moments: [
      { title: "Plan your escape", description: "Share your dates, group size and favourite ways to spend a day. We propose a route and sleeping arrangements." },
      { title: "Make yourself at home", description: "Board in Palma or at your agreed pickup location, meet the crew and settle into your cabin before the safety briefing." },
      { title: "Explore, then stay", description: "Enjoy time under way and at anchor, with meals and shore visits arranged around your agreed itinerary." },
      { title: "Wake up on the water", description: "Enjoy the next morning aboard before continuing your journey or returning at the agreed time." },
    ],
    bring: ["Soft luggage that is easy to stow", "Swimwear and comfortable layers", "Soft, non-marking shoes", "Personal essentials for your stay"],
    questions: [
      { question: "Can we arrange a different pickup location?", answer: "Yes. Palma is our home port, but a different pickup location may be arranged to suit your trip. Tell us where you would like to board; we will confirm feasibility, timings and any repositioning costs before booking." },
      { question: "How many nights should we plan?", answer: "Tell us how long you would like to stay and what you hope to see. We will confirm available dates, any minimum stay and an itinerary that leaves time to enjoy the journey." },
      { question: "How are cabins and meals arranged?", answer: "We discuss your group's sleeping arrangements, food preferences and dietary requirements before booking. Your proposal confirms the cabin plan, catering and any additional costs." },
    ],
  },
};

export const commonQuestions = [
  { question: "What is included in the price?", answer: "We send a tailored quote for your dates and group. It sets out the agreed charter, crew, food and drinks arrangements, and any additional charges. Please share dietary requirements and special requests when you enquire." },
  { question: "What happens if the weather changes?", answer: "Your captain may adjust the route or activities for safety and comfort. Weather-related changes and cancellation terms are explained in your booking agreement." },
  { question: "Where do we meet, and how do we book?", answer: "Our home port is La Lonja Marina in Palma de Mallorca. Send your preferred date, guest count and wishes. We confirm availability and a proposal, then provide the booking steps and exact meeting details." },
];
