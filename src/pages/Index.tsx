import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';
import { toast } from 'sonner';
import { 
  Package, MessageSquare, ClipboardCheck, Truck, CheckCircle2, TrendingUp, Shield, Users,
  Search, TrendingDown, XCircle, Plane, Ship, Train, Building2, Store, Coffee, Rocket,
  ShoppingCart, Globe, Award, MapPin, Mail, Clock, AlertCircle, HelpCircle, 
  AlertTriangle, Handshake, ShieldCheck, Receipt, Star
} from 'lucide-react';
import heroWarehouse from '@/assets/content/1_.jpeg';
import factorySourcing from '@/assets/content/new_4.jpg';
import negotiation from '@/assets/content/new_3.jpg';
import qualityControl from '@/assets/content/new_2.jpg';
import transportImg from '@/assets/content/new_1.jpg';
import officeTeam from '@/assets/content/office_image.jpg';

const Index = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          subject: 'New Contact Form Submission - Homepage',
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

  const usps = [
    {
      Icon: TrendingUp,
      textNl: 'Direct inkopen bij fabrikanten',
      textEn: 'Direct sourcing from manufacturers',
    },
    {
      Icon: Shield,
      textNl: 'Beste deals door sterke onderhandelingen',
      textEn: 'Best deals through strong negotiations',
    },
    {
      Icon: CheckCircle2,
      textNl: 'Gegarandeerde kwaliteit en controle',
      textEn: 'Guaranteed quality and control',
    },
    {
      Icon: Users,
      textNl: 'Persoonlijke begeleiding & advies',
      textEn: 'Personal guidance & advice',
    },
  ];

  const iconFeatures = [
    {
      Icon: CheckCircle2,
      textNl: 'Betrouwbare leveranciers in China',
      textEn: 'Trusted suppliers in China',
    },
    {
      Icon: TrendingUp,
      textNl: 'Transparante all-in prijzen',
      textEn: 'Transparent all-in pricing',
    },
    {
      Icon: Shield,
      textNl: 'Kwaliteitscontrole bij productie en levering',
      textEn: 'Quality control during production & delivery',
    },
    {
      Icon: Users,
      textNl: 'Eén vast aanspreekpunt voor het hele proces',
      textEn: 'One dedicated contact for the entire process',
    },
  ];

  const orangeServices = [
    {
      Icon: Package,
      titleNl: 'Sourcing',
      titleEn: 'Sourcing',
      descNl: 'Vind en selecteer betrouwbare leveranciers',
      descEn: 'Find and select trusted suppliers',
      image: factorySourcing,
    },
    {
      Icon: MessageSquare,
      titleNl: 'Onderhandelingen',
      titleEn: 'Negotiations',
      descNl: 'Bespaar met onze ervaren onderhandelaars',
      descEn: 'Save more with our experts',
      image: negotiation,
    },
    {
      Icon: ClipboardCheck,
      titleNl: 'Kwaliteitscontrole',
      titleEn: 'Quality control',
      descNl: 'Lokale teams in China voor toezicht',
      descEn: 'Local teams in China for oversight',
      image: qualityControl,
    },
    {
      Icon: Truck,
      titleNl: 'Logistiek',
      titleEn: 'Logistics',
      descNl: 'Complete all-in transportoplossingen uit China',
      descEn: 'Complete all-in transport solutions from China',
      image: transportImg,
    },
  ];

  const faqs = [
    {
      questionNl: 'Wat betekent een all-in prijs?',
      questionEn: 'What does all-in pricing mean?',
      answerNl: 'Onze offertes zijn altijd all-in: één totaalprijs voor sourcing en logistiek, inclusief een 10% handling fee. Alle bedragen zijn exclusief btw.',
      answerEn: 'Our quotes are all-in: one total price for sourcing and logistics, including a 10% handling fee. All prices are excluding VAT.',
    },
    {
      questionNl: 'Hoe snel ontvang ik leveranciersvoorstellen?',
      questionEn: 'How fast do I receive supplier proposals?',
      answerNl: 'Binnen 3–5 werkdagen ontvang je een shortlist met geschikte fabrikanten uit China.',
      answerEn: 'Within 3–5 working days you\'ll get a shortlist of suitable factories in China.',
    },
    {
      questionNl: 'Kan ik alleen sourcing of alleen logistiek afnemen?',
      questionEn: 'Can I use sourcing or logistics as separate services?',
      answerNl: 'Ja, je kunt kiezen voor losse diensten of een complete oplossing.',
      answerEn: 'Yes, you can choose individual services or a complete solution.',
    },
    {
      questionNl: 'Helpen jullie ook startende ondernemers?',
      questionEn: 'Do you also support startups?',
      answerNl: 'Zeker, wij begeleiden zowel starters als gevestigde bedrijven bij hun import uit China.',
      answerEn: 'Absolutely, we assist both new and established businesses with their imports from China.',
    },
    {
      questionNl: 'Hoe lang duurt transport vanuit China?',
      questionEn: 'How long does shipping from China take?',
      answerNl: 'Gemiddeld duurt luchtvracht 3–14 dagen, zeevracht 20–55 dagen en treinvervoer 20–40 dagen. Dit zijn richtlijnen; de exacte transportduur kan variëren afhankelijk van planning, route en omstandigheden.',
      answerEn: 'On average, air freight takes 3–14 days, sea freight 20–55 days, and rail transport 20–40 days. These are typical lead times; actual delivery may vary depending on schedule, route, and conditions.',
    },
    {
      questionNl: 'Ik wil een eigen merk starten, kunnen jullie helpen?',
      questionEn: 'I want to start my own brand, can you help?',
      answerNl: 'Ja, wij adviseren en begeleiden van idee tot levering.',
      answerEn: 'Yes, we advise and support you from idea to delivery.',
    },
    {
      questionNl: 'Wat zijn de minimale orderhoeveelheden (MOQ\'s)?',
      questionEn: 'What are the minimum order quantities (MOQs)?',
      answerNl: 'Dit verschilt per product en fabrikant, maar wij zoeken altijd naar de meest gunstige voorwaarden.',
      answerEn: 'This depends on the product and manufacturer, but we always negotiate for the best terms.',
    },
    {
      questionNl: 'Hoe wordt de kwaliteit gecontroleerd?',
      questionEn: 'How is quality controlled?',
      answerNl: 'Onze lokale teams in China voeren kwaliteitscontroles uit bij productie en voor verzending.',
      answerEn: 'Our local teams in China conduct quality inspections during production and before shipping.',
    },
    {
      questionNl: 'Hoe werkt de betaling?',
      questionEn: 'How does payment work?',
      answerNl: 'Wij werken met facturen; betaling verloopt via bankoverschrijving volgens de afgesproken termijnen.',
      answerEn: 'We work with invoices; payment is made by bank transfer according to the agreed terms.',
    },
    {
      questionNl: 'Regelen jullie ook douane en importdocumenten?',
      questionEn: 'Do you also handle customs and import documents?',
      answerNl: 'Ja, alle douaneafhandeling en benodigde documenten worden volledig door ons geregeld.',
      answerEn: 'Yes, we take care of all customs clearance and required documentation.',
    },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />

      {/* Hero Section - Creative Redesign */}
      <section id="home" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-primary/5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16 max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
  <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
  <span className="text-sm font-bold text-primary uppercase tracking-wider whitespace-nowrap">
    {t('Sourcing & Logistics Experts', 'Sourcing & Logistics Experts')}
  </span>
</div>


              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6">
                  {t('Sourcing & Logistiek - Alles onder één dak', 'Sourcing & Logistics - All in One Solution')}
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t(
                    'Bespaar tijd en verhoog je marge. Wij zijn gespecialiseerd in sourcing en logistiek vanuit China.',
                    'Save time and increase your margins. We specialize in sourcing and logistics from China.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-4 shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('Plan gratis consultatie', 'Free consultation')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-4 border-2 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('Ontvang jouw all-in offerte', 'Get your all-in quote today')}
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <p className="text-sm text-muted-foreground">{t('Jaar ervaring', 'Years experience')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <p className="text-sm text-muted-foreground">{t('Klanten', 'Clients')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <p className="text-sm text-muted-foreground">{t('Landen', 'Countries')}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-primary/10 max-w-lg w-full">
                <img
                  src={heroWarehouse}
                  alt={t('Warehouse logistics', 'Warehouse logistics')}
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background border-2 border-primary rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t('All-in service', 'All-in service')}</div>
                    <p className="text-sm text-muted-foreground">{t('Van A tot Z', 'From A to Z')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-accent/30">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section - Professional */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                {t('Onze diensten', 'Our Services')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t(
                  'Complete sourcing en logistieke oplossingen vanuit China',
                  'Complete sourcing and logistics solutions from China'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Sourcing Service */}
              <div className="group">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 h-full border border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Package className="h-7 w-7 text-white" />
                      </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{t('Sourcing', 'Sourcing')}</h3>
                      <p className="text-gray-600">{t('Vind de juiste fabrikant', 'Find the right manufacturer')}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t(
                      'Wij zoeken, selecteren en onderhandelen direct met fabrikanten in China voor de beste prijzen en kwaliteit.',
                      'We search, select and negotiate directly with manufacturers in China for the best prices and quality.'
                    )}
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { nl: 'Directe fabrikant contact', en: 'Direct manufacturer contact' },
                      { nl: 'Beste prijzen door onderhandeling', en: 'Best prices through negotiation' },
                      { nl: 'Kwaliteitscontrole en verificatie', en: 'Quality control and verification' },
                      ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{t(item.nl, item.en)}</span>
                  </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => scrollToSection('#contact')}
                  >
                    {t('Start sourcing', 'Start sourcing')}
                  </Button>
                </div>
                  </div>

              {/* Logistics Service */}
              <div className="group">
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 h-full border border-secondary/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Truck className="h-7 w-7 text-white" />
                    </div>
                  <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{t('Logistiek', 'Logistics')}</h3>
                      <p className="text-gray-600">{t('Wereldwijd transport vanuit China', 'Worldwide shipping from China')}</p>
                      </div>
                    </div>
                    
                  <p className="text-gray-700 mb-6 leading-relaxed">
                        {t(
                      'Complete transportoplossingen van China naar jouw deur met real-time tracking en douaneafhandeling.',
                      'Complete transport solutions from China to your door with real-time tracking and customs clearance.'
                        )}
                      </p>

                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <Plane className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">3-14 {t('dagen', 'days')}</div>
                      <div className="text-xs text-gray-600">{t('Luchtvracht', 'Air freight')}</div>
                  </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <Ship className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">20-55 {t('dagen', 'days')}</div>
                      <div className="text-xs text-gray-600">{t('Zeevracht', 'Sea freight')}</div>
                          </div>
                    <div className="text-center p-3 bg-white/50 rounded-lg">
                      <Train className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">20-40 {t('dagen', 'days')}</div>
                      <div className="text-xs text-gray-600">{t('Trein', 'Rail')}</div>
                  </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                    onClick={() => scrollToSection('#contact')}
                  >
                    {t('Ontdek logistiek', 'Discover logistics')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
                {t('Waarom kiezen voor ons', 'Why choose us')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {usps.map((usp, index) => {
                const Icon = usp.Icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-sm border border-white/20 h-full flex flex-col">
                    <div className="flex-grow flex flex-col text-center">
                      <div className="h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight flex-grow flex items-center justify-center text-white">{t(usp.textNl, usp.textEn)}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Orange Services Section */}
      <section className="py-16 bg-white text-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-gray-900">
                {t('Onze kernexpertise', 'Our core expertise')}
              </h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
              </div>
              <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                {t(
                  'Van sourcing tot levering - alles onder één dak',
                  'From sourcing to delivery - all under one roof'
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {orangeServices.map((service, index) => {
                const Icon = service.Icon;
                return (
                  <div key={index} className="group h-full">
                    <div className="h-full text-center flex flex-col">
                      {/* Clean Image Container */}
                      <div className="w-full max-w-[200px] mx-auto aspect-square mb-6 group-hover:scale-105 transition-all duration-500">
                        <img 
                          src={service.image} 
                          alt={t(service.titleNl, service.titleEn)}
                          className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                        />
                      </div>
                      
                      {/* Enhanced Content */}
                      <div className="flex-grow flex flex-col">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{t(service.titleNl, service.titleEn)}</h3>
                        <p className="text-gray-600 leading-relaxed px-2 flex-grow flex items-center justify-center text-sm">
                          {t(service.descNl, service.descEn)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section id="sourcing" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-primary">
                {t('Sourcing', 'Sourcing')}
              </h2>
              <p className="text-xl lg:text-2xl text-black mb-4 font-semibold">
                {t('Vind de juiste fabrikant', 'Find the right manufacturer')}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij zoeken, selecteren en onderhandelen direct met fabrikanten in China. Zo krijg jij betrouwbare productie, de beste prijs en duidelijke afspraken.',
                  'We search, shortlist, and negotiate directly with factories in China. This ensures reliable production, the best pricing, and clear terms.'
                )}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                {t('Uitdagingen in het sourcingproces:', 'Challenges in sourcing:')}
              </h3>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {[
                  { icon: Clock, nl: 'Urenlang zoeken zonder resultaat', en: 'Hours of searching without results' },
                  { icon: TrendingDown, nl: 'Te hoge prijzen door beperkte onderhandelingspositie', en: 'Higher prices due to limited negotiation power' },
                  { icon: AlertCircle, nl: 'Onzekerheid over kwaliteit en levertijd', en: 'Uncertainty about quality and lead times' },
                  ].map((challenge, i) => {
                    const Icon = challenge.icon;
                    return (
                      <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <div className="flex items-start gap-4 h-full">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-destructive" />
                          </div>
                          <p className="text-muted-foreground leading-relaxed pt-2 flex-grow">{t(challenge.nl, challenge.en)}</p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                  { icon: HelpCircle, nl: 'Onduidelijke MOQ\'s en totale kosten', en: 'Limited visibility on MOQs and total costs' },
                  { icon: AlertTriangle, nl: 'Risico op onbetrouwbare leveranciers', en: 'Risk of unreliable suppliers or middlemen' },
                ].map((challenge, i) => {
                  const Icon = challenge.icon;
                  return (
                      <Card key={i + 3} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                        <div className="flex items-start gap-4 h-full">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-destructive" />
                        </div>
                          <p className="text-muted-foreground leading-relaxed pt-2 flex-grow">{t(challenge.nl, challenge.en)}</p>
                      </div>
                    </Card>
                  );
                })}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                {t('Onze sourcing voordelen:', 'Our sourcing advantages:')}
              </h3>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {[
                    { icon: Building2, nl: 'Directe toegang tot betrouwbare fabrikanten', en: 'Direct access to reliable manufacturers' },
                    { icon: Handshake, nl: 'Ervaren onderhandelaars voor maximale besparing', en: 'Experienced negotiators for maximum savings' },
                    { icon: ShieldCheck, nl: 'Kwaliteitscontrole en certificering verificatie', en: 'Quality control and certification verification' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card key={i} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                      <div className="flex flex-col items-center gap-4 h-full justify-center">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <p className="font-semibold text-lg leading-relaxed">{t(item.nl, item.en)}</p>
                    </div>
                  </Card>
                  );
                })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    { icon: Receipt, nl: 'Transparante prijzen zonder verborgen kosten', en: 'Transparent pricing without hidden costs' },
                    { icon: Users, nl: 'Persoonlijke begeleiding van A tot Z', en: 'Personal guidance from A to Z' },
                  ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Card key={i + 3} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                      <div className="flex flex-col items-center gap-4 h-full justify-center">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <p className="font-semibold text-lg leading-relaxed">{t(item.nl, item.en)}</p>
                    </div>
                  </Card>
                  );
                })}
                </div>
              </div>
            </div>

            {/* Sourcing Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border-2 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full text-sm font-bold shadow-lg">
                  {t('Populair', 'Popular')}
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Star className="h-7 w-7 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Basic Sourcing</h3>
                    <div className="flex items-baseline gap-2">
                      <div className="text-4xl font-bold text-primary">€99</div>
                      <div className="text-sm text-muted-foreground">{t('excl. btw', 'excl. VAT')}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {t(
                      'Shortlist met beste leveranciers en prijzen. Vergelijking op kwaliteit, MOQ en levertijd. Het bedrag wordt volledig verrekend als je via ons inkoopt.',
                      'Shortlist with best suppliers and prices. Comparison of quality, MOQs, and lead times. Credited in full if you continue procurement with us.'
                    )}
                  </p>
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Shortlist beste leveranciers', 'Shortlist of best suppliers')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Prijsvergelijking', 'Price comparison')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Volledig verrekenbaar', 'Fully refundable')}</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <a href="#contact" className="w-full block">
                    <Button variant="secondary" size="lg" className="w-full">
                      {t('Vraag Basic Sourcing aan', 'Request Basic Sourcing')}
                    </Button>
                  </a>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Plus Sourcing</h3>
                    <div className="flex items-baseline gap-2">
                      <div className="text-4xl font-bold text-primary">€199</div>
                      <div className="text-sm text-muted-foreground">{t('excl. btw', 'excl. VAT')}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {t(
                      'Alles van Basic, inclusief volledige leveranciersgegevens → direct contact mogelijk. Ideaal als je zelf verder wilt gaan zonder begeleiding.',
                      'Everything in Basic, including full supplier details → direct contact enabled. Ideal if you prefer to continue independently.'
                    )}
                  </p>
                  <ul className="space-y-3 pt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Alles van Basic', 'Everything from Basic')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Volledige leveranciersgegevens', 'Full supplier details')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t('Direct contact mogelijk', 'Direct contact enabled')}</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-auto">
                  <a href="#contact" className="w-full block">
                    <Button variant="default" size="lg" className="w-full">
                      {t('Vraag Plus Sourcing aan', 'Request Plus Sourcing')}
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistics" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-primary">
                {t('Logistiek', 'Logistics')}
              </h2>
              <p className="text-xl lg:text-2xl text-black mb-4 font-semibold">
                {t('Wereldwijd transport vanuit China', 'Worldwide shipping from China')}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij regelen jouw transport volledig vanuit China – snel, veilig en voordelig.',
                  'We manage your transport fully from China – fast, safe, and cost-effective.'
                )}
              </p>
            </div>

            {/* Transport Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Plane className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('Luchtvracht', 'Air Freight')}</h3>
                <div className="text-xl font-bold text-primary mb-4">3-14 {t('dagen', 'days')} <span className="text-sm">{t('(10% service fee)', '(10% service fee)')}</span></div>
                <p className="text-muted-foreground flex-grow">{t('Snelste optie voor urgente zendingen', 'Fastest option for urgent shipments')}</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Ship className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('Zeevracht', 'Sea Freight')}</h3>
                <div className="text-xl font-bold text-primary mb-4">20-55 {t('dagen', 'days')} <span className="text-sm">{t('(10% service fee)', '(10% service fee)')}</span></div>
                <p className="text-muted-foreground flex-grow">{t('Meest economisch voor grote volumes', 'Most economical for large volumes')}</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Train className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('Treintransport', 'Train Transport')}</h3>
                <div className="text-xl font-bold text-primary mb-4">20-40 {t('dagen', 'days')} <span className="text-sm">{t('(10% service fee)', '(10% service fee)')}</span></div>
                <p className="text-muted-foreground flex-grow">{t('Balans tussen snelheid en kosten', 'Balance between speed and cost')}</p>
              </Card>
            </div>

            {/* Shipping Times Disclaimer */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-l-primary/20 text-center">
                <p className="text-sm text-muted-foreground italic">
                  {t(
                    'Dit zijn gemiddelde doorlooptijden; de werkelijke transportduur kan korter of langer zijn afhankelijk van omstandigheden.',
                    'These are average lead times; actual shipping duration may be shorter or longer depending on circumstances.'
                  )}
                </p>
              </div>
            </div>

            {/* Why choose us for logistics */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {t('Onze logistieke voordelen:', 'Our logistics advantages:')}
              </h3>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {[
                    { nl: 'Wereldwijde transportoplossingen vanuit China', en: 'Global transport solutions from China' },
                    { nl: 'All-in tarieven inclusief douane en handling', en: 'All-in rates including customs and handling' },
                    { nl: 'Snelle en veilige levering naar jouw deur', en: 'Fast and secure delivery to your door' },
                ].map((item, i) => (
                    <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 h-full">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                        <p className="font-medium flex-grow">{t(item.nl, item.en)}</p>
                    </div>
                  </Card>
                ))}
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    { nl: 'Real-time tracking en proactieve updates', en: 'Real-time tracking and proactive updates' },
                    { nl: 'Flexibele transportopties voor elke behoefte', en: 'Flexible transport options for every need' },
                  ].map((item, i) => (
                    <Card key={i + 3} className="p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 h-full">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
                        <p className="font-medium flex-grow">{t(item.nl, item.en)}</p>
                  </div>
                </Card>
                ))}
                    </div>
                    </div>
                  </div>

            {/* Service Fee Information */}
            <div className="mb-4">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4 text-primary">
                      {t('Onze service fee', 'Our service fee')}
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      {t(
                        'Onze service fee bedraagt 10% van de totale verzendkosten',
                        'Our service fee is 10% of the total shipping cost'
                      )}
                    </p>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target-audience" className="bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                {t('Voor wie wij werken', 'Who we work for')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Startups & gevestigde merken', 'Startups & established brands')}
                </h3>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('E-commerce & marketplace verkopers', 'E-commerce & marketplace sellers')}
                </h3>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Retailers & groothandels', 'Retailers and wholesalers')}
                </h3>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Horeca & hotels (non-food)', 'Hospitality & hotels (non-food)')}
                </h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-primary">
                {t('Over ons', 'About us')}
              </h2>
              <p className="text-xl lg:text-2xl text-black mb-4 font-semibold">
                {t('Uw partner in groei', 'Your partner in growth')}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij zijn uw betrouwbare partner voor sourcing en logistiek vanuit China. Met kantoren in Nederland en China bieden wij lokale aanwezigheid, sterke onderhandelingen en complete begeleiding.',
                  'We are your trusted partner for sourcing and logistics from China. With offices in the Netherlands and China, we provide local presence, strong negotiations and full support.'
                )}
              </p>
            </div>

            {/* Our Strengths */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('Onze kracht:', 'Our strengths:')}</h3>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { nl: 'Sterk netwerk van fabrikanten en logistieke partners in China', en: 'Strong network of factories and logistics partners in China' },
                  { nl: 'Teams in China én Nederland voor begeleiding en communicatie', en: 'Teams in both China and the Netherlands for support and communication' },
                  ].map((item, i) => (
                    <Card key={i} className="p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 h-full">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="font-medium flex-grow">{t(item.nl, item.en)}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                  { nl: 'Transparante all-in prijzen inclusief sourcing, logistiek en handling fee', en: 'Transparent all-in pricing covering sourcing, logistics, and handling fee' },
                  { nl: 'Focus op beste prijs-kwaliteit en maximale marge voor onze klanten', en: 'Focus on best price-quality and maximizing customer margins' },
                ].map((item, i) => (
                    <Card key={i + 2} className="p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 h-full">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="font-medium flex-grow">{t(item.nl, item.en)}</p>
                    </div>
                  </Card>
                ))}
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center">{t('Onze waarden:', 'Our values:')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t('Persoonlijke aanpak', 'Personal approach')}</h3>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t('Internationaal netwerk', 'International network')}</h3>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t('Bewezen kwaliteit', 'Proven quality')}</h3>
                </Card>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-12">
              <Card className="p-10 bg-primary/5 border-2 border-primary/20">
                <h3 className="text-3xl font-bold mb-6 text-center">{t('Onze missie:', 'Our mission:')}</h3>
                <p className="text-xl text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {t(
                    'Wij geloven dat inkopen en transporteren vanuit China eenvoudiger, transparanter en winstgevender kan. Daarom ondersteunen wij ondernemers met directe inkoop bij fabrikanten, scherpe onderhandelingen en efficiënte logistieke oplossingen.',
                    'We believe sourcing and shipping from China should be easier, more transparent, and more profitable. That\'s why we support entrepreneurs with direct factory sourcing, strong negotiations, and efficient logistics.'
                  )}
                </p>
              </Card>
            </div>

            {/* Our Results */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center">{t('Onze resultaten:', 'Our results:')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3">10+</div>
                  <p className="text-xl font-semibold">{t('jaar ervaring', 'years of experience')}</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3">100+</div>
                  <p className="text-xl font-semibold">{t('tevreden klanten', 'satisfied clients')}</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3">10+</div>
                  <p className="text-xl font-semibold">{t('landen wereldwijd', 'countries worldwide')}</p>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">{t('Onze kantoren', 'Our offices')}</h3>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">{t('Nederland', 'Netherlands')}</h4>
                        <p className="text-muted-foreground">Amsterdam</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">China</h4>
                        <p className="text-muted-foreground">Shenzhen</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={officeTeam}
                  alt={t('Our team', 'Our team')}
                  className="w-full max-w-lg object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Veelgestelde vragen', 'Frequently Asked Questions')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {t(faq.questionNl, faq.questionEn)}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {t(faq.answerNl, faq.answerEn)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Klaar om te starten?', 'Ready to get started?')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                {t('Plan een gratis consultatie of ontvang direct jouw all-in offerte.', 'Book your free consultation or get your all-in quote today.')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 h-full flex flex-col shadow-2xl">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-2">
                    {t('Start jouw project', 'Start your project')}
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    {t('Vul het formulier in en wij nemen binnen 24 uur contact met je op', 'Fill out the form and we\'ll contact you within 24 hours')}
                  </p>
                </div>

                <form 
                  onSubmit={handleFormSubmit}
                  className="p-6 space-y-5 flex-grow flex flex-col"
                >
                  
                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label htmlFor="homepage-name" className="block text-sm font-semibold mb-2 text-foreground">
                        {t('Naam', 'Name')} *
                      </label>
                      <Input 
                        id="homepage-name"
                        name="name"
                        placeholder={t('Uw naam', 'Your name')} 
                        required 
                        className="border-2 focus:border-primary transition-colors"
                      />
                  </div>
                  <div>
                      <label htmlFor="homepage-email" className="block text-sm font-semibold mb-2 text-foreground">
                        {t('E-mail', 'Email')} *
                      </label>
                      <Input 
                        id="homepage-email"
                        name="email"
                        type="email" 
                        placeholder={t('uw@email.nl', 'your@email.com')} 
                        required 
                        className="border-2 focus:border-primary transition-colors"
                      />
                  </div>
                  </div>

                  <div>
                    <label htmlFor="homepage-company" className="block text-sm font-semibold mb-2 text-foreground">
                      {t('Bedrijf', 'Company')}
                    </label>
                    <Input 
                      id="homepage-company"
                      name="company"
                      placeholder={t('Uw bedrijfsnaam', 'Your company name')} 
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="homepage-service" className="block text-sm font-semibold mb-2 text-foreground">
                      {t('Service interesse', 'Service Interest')} *
                    </label>
                    <select 
                      id="homepage-service"
                      name="service_interest"
                      required
                      className="w-full px-3 py-3 border-2 border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:border-primary transition-colors"
                    >
                      <option value="">{t('Selecteer een service', 'Select a service')}</option>
                      <option value="sourcing">{t('Sourcing - Vind de juiste fabrikant', 'Sourcing - Find the right manufacturer')}</option>
                      <option value="logistics">{t('Logistiek - Transport vanuit China', 'Logistics - Shipping from China')}</option>
                      <option value="both">{t('Beide - Sourcing en Logistiek', 'Both - Sourcing and Logistics')}</option>
                      <option value="consultation">{t('Gratis consultatie', 'Free consultation')}</option>
                    </select>
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="homepage-message" className="block text-sm font-semibold mb-2 text-foreground">
                      {t('Bericht', 'Message')} *
                    </label>
                    <Textarea 
                      id="homepage-message"
                      name="message"
                      rows={4} 
                      placeholder={t('Vertel ons over jouw project en behoeften...', 'Tell us about your project and needs...')} 
                      className="h-full border-2 focus:border-primary transition-colors resize-none" 
                      required 
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
              <div className="space-y-6 flex flex-col">
                {/* Contact Methods */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Email Card */}
                  <Card className="group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-primary/5">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-7 w-7 text-primary" />
                    </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-1 text-foreground">{t('E-mail', 'Email')}</h3>
                          <p className="text-muted-foreground font-medium">Contact@storeify.co</p>
                          <p className="text-xs text-muted-foreground mt-1">{t('Reactie binnen 24 uur', 'Response within 24 hours')}</p>
                    </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                    </div>
                  </div>
                </Card>

                  {/* Location Card */}
                  <Card className="group relative overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-primary/5">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-7 w-7 text-primary" />
                    </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-1 text-foreground">{t('Kantoren', 'Offices')}</h3>
                          <p className="text-muted-foreground font-medium">{t('Nederland & China', 'Netherlands & China')}</p>
                          <p className="text-xs text-muted-foreground mt-1">{t('Lokale teams wereldwijd', 'Local teams worldwide')}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                        </div>
                    </div>
                  </div>
                </Card>
                </div>

                {/* CTA Card */}
                <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-2xl flex-grow">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>
                  
                  <div className="relative p-8 flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
                          <Star className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold">
                    {t('All-in offerte aanvragen', 'Get all-in quote')}
                  </h3>
                      </div>
                      
                      <p className="text-primary-foreground/90 text-base leading-relaxed mb-6">
                    {t(
                          'Ontvang een gedetailleerde offerte inclusief sourcing, logistiek en alle kosten. Geen verborgen kosten, volledig transparant.',
                          'Get a detailed quote including sourcing, logistics and all costs. No hidden fees, fully transparent.'
                    )}
                  </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-2 w-2 bg-primary-foreground/60 rounded-full"></div>
                          <span>{t('Gratis consultatie', 'Free consultation')}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-2 w-2 bg-primary-foreground/60 rounded-full"></div>
                          <span>{t('Transparante all-in prijzen', 'Transparent all-in pricing')}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-2 w-2 bg-primary-foreground/60 rounded-full"></div>
                          <span>{t('Persoonlijke begeleiding', 'Personal guidance')}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
