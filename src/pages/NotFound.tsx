import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent">404</h1>
          <p className="mb-8 text-2xl text-muted-foreground">
            {t('Oeps! Pagina niet gevonden', 'Oops! Page not found')}
          </p>
          <Button asChild size="lg">
            <Link to="/">
              {t('Terug naar home', 'Return to Home')}
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
