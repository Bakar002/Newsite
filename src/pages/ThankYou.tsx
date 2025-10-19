import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 lg:p-12">
            <div className="space-y-6">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>

              {/* Success Message */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
                  {t('Bedankt voor uw bericht!', 'Thank you for your message!')}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    'We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op. Meestal reageren wij binnen 24 uur op werkdagen.',
                    'We have received your message and will contact you as soon as possible. We usually respond within 24 hours on business days.'
                  )}
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">
                  {t('Wat gebeurt er nu?', 'What happens next?')}
                </h2>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('We beoordelen uw aanvraag en bereiden een passende offerte voor', 'We review your request and prepare a suitable quote')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('U ontvangt een gedetailleerde all-in offerte per e-mail', 'You will receive a detailed all-in quote by email')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('We plannen een gratis consultatie om uw behoeften te bespreken', 'We schedule a free consultation to discuss your needs')}</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-muted-foreground">
                <p>
                  {t(
                    'Heeft u dringende vragen? Neem direct contact met ons op via ',
                    'Have urgent questions? Contact us directly via '
                  )}
                  <a href="mailto:contact@storefiy.co" className="text-primary hover:underline">
                    contact@storefiy.co
                  </a>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('Terug naar home', 'Back to home')}
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link to="/contact">
                    {t('Meer informatie', 'More information')}
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
