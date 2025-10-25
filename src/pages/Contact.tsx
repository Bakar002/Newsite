import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to object
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      service_interest: formData.get('service_interest') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '123f4812-9e49-40a8-8141-c9e82c24006d',
          subject: 'New Contact Form Submission - Contact Page',
          from_name: data.name,
          ...data
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(
          t(
            '🎉 Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.',
            '🎉 Thank you for your message! We will contact you within 24 hours.'
          ),
          {
            description: t(
              'Uw aanvraag is succesvol verzonden. We kijken ernaar uit om met u samen te werken!',
              'Your request has been sent successfully. We look forward to working with you!'
            ),
            duration: 5000,
          }
        );
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error(
        t(
          '❌ Er is een fout opgetreden bij het versturen van uw bericht.',
          '❌ An error occurred while sending your message.'
        ),
        {
          description: t(
            'Probeer het later opnieuw of neem direct contact met ons op via Contact@storeify.co',
            'Please try again later or contact us directly at Contact@storeify.co'
          ),
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqsNl = [
    {
      question: 'Wat betekent een all-in prijs?',
      answer: 'Onze offertes bevatten altijd een totaalprijs inclusief sourcing, onderhandelingen, logistiek en handling fee.',
    },
    {
      question: 'Hoe snel ontvang ik leveranciersvoorstellen?',
      answer: 'Binnen 3–5 werkdagen ontvang je een shortlist met geschikte fabrikanten uit China.',
    },
    {
      question: 'Kan ik alleen sourcing of alleen logistiek afnemen?',
      answer: 'Ja, je kunt kiezen voor losse diensten of een complete oplossing.',
    },
    {
      question: 'Helpen jullie ook startende ondernemers?',
      answer: 'Zeker, wij begeleiden zowel starters als gevestigde bedrijven bij hun import uit China.',
    },
    {
      question: 'Hoe lang duurt transport vanuit China?',
      answer: 'Afhankelijk van de methode: luchtvracht 3–12 dagen, zeevracht 20–40 dagen, trein 20–30 dagen.',
    },
    {
      question: 'Ik wil een eigen merk starten, kunnen jullie helpen?',
      answer: 'Ja, wij adviseren en begeleiden van idee tot levering.',
    },
    {
      question: "Wat zijn de minimale orderhoeveelheden (MOQ's)?",
      answer: 'Dit verschilt per product en fabrikant, maar wij zoeken altijd naar de meest gunstige voorwaarden.',
    },
    {
      question: 'Hoe wordt de kwaliteit gecontroleerd?',
      answer: 'Onze lokale teams in China voeren kwaliteitscontroles uit bij productie en voor verzending.',
    },
    {
      question: 'Hoe werkt de betaling?',
      answer: 'Wij werken met veilige betaalmethoden en duidelijke afspraken over termijnen.',
    },
    {
      question: 'Regelen jullie ook douane en importdocumenten?',
      answer: 'Ja, alle douaneafhandeling en benodigde documenten worden volledig door ons geregeld.',
    },
  ];

  const faqsEn = [
    {
      question: 'What does all-in pricing mean?',
      answer: 'Our quotes always include sourcing, negotiations, logistics and handling fee in one transparent price.',
    },
    {
      question: 'How fast do I receive supplier proposals?',
      answer: "Within 3–5 working days you'll get a shortlist of suitable factories in China.",
    },
    {
      question: 'Can I use sourcing or logistics as separate services?',
      answer: 'Yes, you can choose individual services or a complete solution.',
    },
    {
      question: 'Do you also support startups?',
      answer: 'Absolutely, we assist both new and established businesses with their imports from China.',
    },
    {
      question: 'How long does shipping from China take?',
      answer: 'Depending on the method: air freight 3–12 days, sea freight 20–40 days, rail 20–30 days.',
    },
    {
      question: 'I want to start my own brand, can you help?',
      answer: 'Yes, we advise and support you from idea to delivery.',
    },
    {
      question: 'What are the minimum order quantities (MOQs)?',
      answer: 'This depends on the product and manufacturer, but we always negotiate for the best terms.',
    },
    {
      question: 'How is quality controlled?',
      answer: 'Our local teams in China conduct quality inspections during production and before shipping.',
    },
    {
      question: 'How does payment work?',
      answer: 'We use secure payment methods and clear agreements on payment terms.',
    },
    {
      question: 'Do you also handle customs and import documents?',
      answer: 'Yes, we take care of all customs clearance and required documentation.',
    },
  ];

  const { language } = useLanguage();
  const faqs = language === 'nl' ? faqsNl : faqsEn;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('Neem contact op', 'Get in touch')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Heb je vragen of wil je direct starten met sourcing of logistiek vanuit China?',
                'Do you have questions or want to start with sourcing or logistics from China right away?'
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* Contact Form */}
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-2xl">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-2">
                  {t('Stuur ons een bericht', 'Send us a message')}
                </h2>
                <p className="text-primary-foreground/90 text-sm">
                  {t('Vul het formulier in en wij nemen binnen 24 uur contact met je op', 'Fill out the form and we\'ll contact you within 24 hours')}
                </p>
              </div>

              <form 
                onSubmit={handleFormSubmit}
                className="p-6 space-y-5"
              >
                
                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-sm font-semibold text-foreground">
                      {t('Naam', 'Name')} *
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      placeholder={t('Uw naam', 'Your name')}
                      className="border-2 focus:border-primary transition-colors mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={t('uw@email.nl', 'your@email.com')}
                      className="border-2 focus:border-primary transition-colors mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-company" className="text-sm font-semibold text-foreground">
                    {t('Bedrijf', 'Company')}
                  </Label>
                  <Input
                    id="contact-company"
                    name="company"
                    placeholder={t('Uw bedrijfsnaam', 'Your company name')}
                    className="border-2 focus:border-primary transition-colors mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-service" className="text-sm font-semibold text-foreground">
                    {t('Service interesse', 'Service Interest')} *
                  </Label>
                  <select 
                    id="contact-service"
                    name="service_interest"
                    required
                    className="w-full px-3 py-3 border-2 border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:border-primary transition-colors mt-2"
                  >
                    <option value="">{t('Selecteer een service', 'Select a service')}</option>
                    <option value="sourcing">{t('Sourcing - Vind de juiste fabrikant', 'Sourcing - Find the right manufacturer')}</option>
                    <option value="logistics">{t('Logistiek - Transport vanuit China', 'Logistics - Shipping from China')}</option>
                    <option value="both">{t('Beide - Sourcing en Logistiek', 'Both - Sourcing and Logistics')}</option>
                    <option value="consultation">{t('Gratis consultatie', 'Free consultation')}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="contact-message" className="text-sm font-semibold text-foreground">
                    {t('Bericht', 'Message')} *
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t('Vertel ons over jouw project en behoeften...', 'Tell us about your project and needs...')}
                    className="border-2 focus:border-primary transition-colors resize-none mt-2"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(
                      'Door dit formulier in te dienen, gaat u akkoord met onze ',
                      'By submitting this form, you agree to our '
                    )}
                    <a href="/terms-conditions" className="text-primary hover:underline font-medium">
                      {t('Algemene Voorwaarden', 'Terms & Conditions')}
                    </a>
                    {t(' en ', ' and ')}
                    <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                      {t('Privacybeleid', 'Privacy Policy')}
                    </a>
                    .
                  </p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? t('Bezig met versturen...', 'Sending...') 
                    : t('Offerte aanvragen', 'Get your quote')
                  }
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">📧 E-mail</h3>
                    <a href="mailto:info@jouwdomein.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@jouwdomein.com
                    </a>
                  </div>
                </div>
              </Card>


              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">📍 {t('Kantoor', 'Offices')}</h3>
                    <div className="text-muted-foreground space-y-2">
                      <p>{t('Nederland & China', 'Netherlands & China')}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-hero-gradient rounded-lg p-6 text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">
                  {t('Klaar om te starten?', 'Ready to get started?')}
                </h3>
                <p className="mb-4 opacity-90">
                  {t(
                    'Ontvang vandaag nog uw gratis all-in offerte',
                    'Get your free all-in quote today'
                  )}
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  👉 {t('Vraag all-in offerte aan | Plan consultatie', 'Request all-in quote | Free consultation')}
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('Veelgestelde vragen', 'Frequently Asked Questions')}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
