import SEOHead from "@/components/SEO/SEOHead";

const NotFound = () => {

  return (
    <>
      <SEOHead
        title="Page Not Found | SV Iron Monkey"
        description="The page you are looking for could not be found. Return to SV Iron Monkey homepage to explore our luxury yacht charters."
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
