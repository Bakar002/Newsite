import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { labelNl: 'Home', labelEn: 'Home', href: '#home', type: 'scroll' as const },
    { labelNl: 'Diensten', labelEn: 'Services', href: '/#services', type: 'hash' as const },
    { labelNl: 'Over ons', labelEn: 'About us', href: '#about', type: 'scroll' as const },
    { labelNl: 'FAQ', labelEn: 'FAQ', href: '#faq', type: 'scroll' as const },
    { labelNl: 'Contact', labelEn: 'Contact', href: '#contact', type: 'scroll' as const },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/storifylogo.png" 
              alt="Storify Logo" 
              className="h-32 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.type === 'route') {
                    e.preventDefault();
                    navigate(item.href);
                    setMobileMenuOpen(false);
                  } else if (item.type === 'scroll') {
                    e.preventDefault();
                    scrollToSection(item.href);
                  } else {
                    // hash route to home section
                    // let the browser handle it for smooth anchor scroll
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-semibold transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full text-foreground cursor-pointer"
              >
                {t(item.labelNl, item.labelEn)}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>

            {/* CTA Button */}
            <Button size="lg" className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow" onClick={() => scrollToSection('#contact')}>
              {t('Plan gratis consultatie', 'Free consultation')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-border pt-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.type === 'route') {
                      e.preventDefault();
                      navigate(item.href);
                      setMobileMenuOpen(false);
                    } else if (item.type === 'scroll') {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    } else {
                      // hash route
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  {t(item.labelNl, item.labelEn)}
                </a>
              ))}
              
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                {language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
              </button>

              <Button size="lg" className="w-full mt-4" onClick={() => scrollToSection('#contact')}>
                {t('Plan gratis consultatie', 'Free consultation')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
