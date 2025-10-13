import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--night-gray))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Storify */}
          <div>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                <img 
                  src="/src/assets/logo/storifylogo.png" 
                  alt="Storify Logo" 
                  className="h-32 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t(
                'Uw partner voor sourcing en logistiek vanuit China. Bespaar tijd en verhoog uw marge.',
                'Your partner for sourcing and logistics from China. Save time and increase your margins.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Snelle links', 'Quick links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Home', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Diensten', 'Services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Over ons', 'About')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Contact', 'Contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Diensten', 'Services')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sourcing" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Sourcing', 'Sourcing')}
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-gray-300 hover:text-primary transition-colors">
                  {t('Logistiek', 'Logistics')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('Contact', 'Contact')}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">{t('info@jouwdomein.com', 'info@yourdomain.com')}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+31 (0)6 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">{t('Nederland & China', 'Netherlands & China')}</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-gray-300 mb-3">
                {t(
                  'Blijf op de hoogte met onze nieuwsbrief',
                  'Stay informed with our newsletter'
                )}
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('E-mail adres', 'Email address')}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="lg" className="shrink-0">
                  {t('Aanmelden', 'Sign up')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Storify. {t('Alle rechten voorbehouden.', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
