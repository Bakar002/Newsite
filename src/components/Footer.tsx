import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import storeifyWhiteLogo from '@/assets/logo/Storeify_white.png';
import facebookIcon from '@/assets/social/facebook.png';
import instagramIcon from '@/assets/social/instagram.png';
import twitterIcon from '@/assets/social/twitter.png';
import tiktokIcon from '@/assets/social/tiktok.png';

const Footer = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to object
    const data = {
      email: formData.get('email') as string,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '123f4812-9e49-40a8-8141-c9e82c24006d',
          subject: 'Newsletter Subscription Request',
          from_name: 'Newsletter Subscriber',
          form_type: 'newsletter',
          ...data
        }),
      });

      const result = await response.json();
      if (result.success) {
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Storify */}
          <div>
            <div className="mb-4">
                <img 
                src={storeifyWhiteLogo} 
                  alt="Storify Logo" 
                className="h-24 w-auto"
                />
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
            <h4 className="text-lg font-semibold mb-3">
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
            <h4 className="text-lg font-semibold mb-3">
              {t('Contact', 'Contact')}
            </h4>
            <ul className="space-y-2 mb-4">
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
              <p className="text-sm text-gray-300 mb-2">
                {t(
                  'Blijf op de hoogte met onze nieuwsbrief',
                  'Stay informed with our newsletter'
                )}
              </p>
              <form 
                onSubmit={handleNewsletterSubmit}
                className="flex gap-2"
              >
                
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
              <div className="mt-3 pt-3 border-t border-white/10">
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

        {/* Social Media */}
        <div className="border-t border-white/10 mt-14 pt-10">
  <div className="flex flex-col items-center gap-6">
    <h4 className="text-sm font-medium text-gray-300 tracking-wide">
      {t('Volg ons', 'Follow us')}
    </h4>

    <div className="flex gap-7">
      {[
        { href: "#", icon: facebookIcon },
        { href: "https://www.instagram.com/storeify.co?igsh=MWNudTdhY2Q4NmN3aw%253D%253D&utm_source=qr", icon: instagramIcon },
        { href: "#", icon: twitterIcon },
        { href: "#", icon: tiktokIcon },
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            h-12 w-12 rounded-full
            flex items-center justify-center
            bg-white border border-white/20
            shadow-sm
            transition-all duration-300 ease-out
            hover:-translate-y-[2px] hover:shadow-lg hover:shadow-white/30
          "
        >
          <img
            src={item.icon}
            alt="social"
            className="h-6 w-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      ))}
    </div>
  </div>
</div>


        {/* Legal Links */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                {t('Privacybeleid', 'Privacy Policy')}
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary transition-colors">
                {t('Algemene Voorwaarden', 'Terms & Conditions')}
              </Link>
            </div>
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Storify. {t('Alle rechten voorbehouden.', 'All rights reserved.')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
