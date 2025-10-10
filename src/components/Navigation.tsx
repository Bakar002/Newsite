import { useState } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { labelNl: 'Home', labelEn: 'Home', href: '#home' },
    { labelNl: 'Diensten', labelEn: 'Services', href: '#services' },
    { labelNl: 'Over ons', labelEn: 'About us', href: '#about' },
    { labelNl: 'FAQ', labelEn: 'FAQ', href: '#faq' },
    { labelNl: 'Contact', labelEn: 'Contact', href: '#contact' },
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
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Package className="h-10 w-10 text-primary" />
            <span className="text-4xl font-bold text-primary tracking-tight">Storeify</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
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
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
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
