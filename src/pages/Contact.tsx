import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Contact = () => {
  const { t } = useLanguage();

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
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                {t('Stuur ons een bericht', 'Send us a message')}
              </h2>
              <form 
                action="https://formsubmit.co/contact@storeify.co" 
                method="POST" 
                target="_blank"
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://storefiy.co/thank-you" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Contact Page" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <Label htmlFor="contact-name">{t('Naam', 'Name')} *</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    placeholder={t('Uw naam', 'Your name')}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('uw@email.nl', 'your@email.com')}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-company">{t('Bedrijf', 'Company')}</Label>
                  <Input
                    id="contact-company"
                    name="company"
                    placeholder={t('Uw bedrijfsnaam', 'Your company name')}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">{t('Bericht', 'Message')} *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t('Uw bericht...', 'Your message...')}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    {t(
                      'Door dit formulier in te dienen, gaat u akkoord met onze ',
                      'By submitting this form, you agree to our '
                    )}
                    <a href="/terms-conditions" className="text-primary hover:underline">
                      {t('Algemene Voorwaarden', 'Terms & Conditions')}
                    </a>
                    {t(' en ', ' and ')}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      {t('Privacybeleid', 'Privacy Policy')}
                    </a>
                    .
                  </p>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {t('Verstuur bericht', 'Send message')}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
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

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">📞 {t('Telefoon', 'Phone')}</h3>
                    <a href="tel:+31612345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +31 (0)6 1234 5678
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
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
