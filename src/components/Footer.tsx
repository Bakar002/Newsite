import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/Contact@storeify.co', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success(
          t(
            '🎉 Bedankt voor uw aanmelding!',
            '🎉 Thank you for subscribing!'
          ),
          {
            description: t(
              'U bent succesvol aangemeld voor onze nieuwsbrief.',
              'You have successfully subscribed to our newsletter.'
            ),
            duration: 4000,
          }
        );
        form.reset();
      } else {
        throw new Error('Newsletter subscription failed');
      }
    } catch (error) {
      toast.error(
        t(
          '❌ Er is een fout opgetreden bij het aanmelden.',
          '❌ An error occurred while subscribing.'
        ),
        {
          description: t(
            'Probeer het later opnieuw.',
            'Please try again later.'
          ),
          duration: 4000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[hsl(var(--night-gray))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Storify */}
          <div>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                <img 
                  src="/storifylogo.png" 
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
                <span className="text-sm">Contact@storeify.co</span>
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
              <form 
                onSubmit={handleNewsletterSubmit}
                className="flex gap-2"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Newsletter Subscription Request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="form_type" value="newsletter" />
                
                <Input
                  name="email"
                  type="email"
                  placeholder={t('E-mail adres', 'Email address')}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? t('Bezig...', 'Sending...') 
                    : t('Aanmelden', 'Sign up')
                  }
                </Button>
              </form>
              <p className="text-xs text-gray-400 mt-2">
                {t(
                  'Door aan te melden gaat u akkoord met onze ',
                  'By signing up you agree to our '
                )}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  {t('Privacybeleid', 'Privacy Policy')}
                </Link>
                .
              </p>
              
              {/* Company Information */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  {t(
                    'KvK: 83929991  •  BTW: NL003892322B46',
                    'Chamber of Commerce (KvK): 83929991  •  VAT: NL003892322B46'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                {t('Privacybeleid', 'Privacy Policy')}
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary transition-colors">
                {t('Algemene Voorwaarden', 'Terms & Conditions')}
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Storify. {t('Alle rechten voorbehouden.', 'All rights reserved.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
