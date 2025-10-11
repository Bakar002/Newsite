import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Package, MessageSquare, ClipboardCheck, Truck, CheckCircle2, TrendingUp, Shield, Users,
  Search, TrendingDown, XCircle, Plane, Ship, Train, Building2, Store, Coffee, Rocket,
  ShoppingCart, Globe, Award, MapPin, Mail, Phone, Clock, AlertCircle, HelpCircle, 
  AlertTriangle, Handshake, ShieldCheck, Receipt, Star
} from 'lucide-react';
import heroWarehouse from '@/assets/hero-warehouse-new.jpg';
import factorySourcing from '@/assets/factory-sourcing-iso.png';
import negotiation from '@/assets/negotiation-iso.png';
import qualityControl from '@/assets/quality-control-iso.png';
import transportImg from '@/assets/transport-logistics-iso.png';
import officeTeam from '@/assets/office-team-iso.png';

const Index = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const usps = [
    {
      Icon: TrendingUp,
      textNl: 'Directe inkoop bij fabrikanten in China',
      textEn: 'Direct sourcing from manufacturers in China',
    },
    {
      Icon: Shield,
      textNl: 'Sterk in onderhandelingen voor maximale besparing',
      textEn: 'Strong in negotiations to maximize savings',
    },
    {
      Icon: CheckCircle2,
      textNl: 'Transparante all-in tarieven (sourcing + logistiek + handling fee)',
      textEn: 'Transparent all-in pricing (sourcing + logistics + handling fee)',
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
      answerNl: 'Onze offertes bevatten altijd een totaalprijs inclusief sourcing, onderhandelingen, logistiek en handling fee.',
      answerEn: 'Our quotes always include sourcing, negotiations, logistics and handling fee in one transparent price.',
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
      answerNl: 'Afhankelijk van de methode: luchtvracht 3–12 dagen, zeevracht 20–40 dagen, trein 20–30 dagen.',
      answerEn: 'Depending on the method: air freight 3–12 days, sea freight 20–40 days, rail 20–30 days.',
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
      answerNl: 'Wij werken met veilige betaalmethoden en duidelijke afspraken over termijnen.',
      answerEn: 'We use secure payment methods and clear agreements on payment terms.',
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
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh] py-20 max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border-2 border-primary/20 rounded-full">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">
                  {t('Sourcing & Logistics Experts', 'Sourcing & Logistics Experts')}
                </span>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
                  {t('Sourcing & Logistiek - Alles onder één dak', 'Sourcing & Logistics - All in One Solution')}
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                  {t(
                    'Bespaar tijd en verhoog je marge. Wij zijn gespecialiseerd in sourcing en logistiek vanuit China.',
                    'Save time and increase your margins. We specialize in sourcing and logistics from China.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('Plan gratis consultatie', 'Free consultation')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-7 border-2 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('Ontvang jouw all-in offerte', 'Get your all-in quote today')}
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
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

      {/* Services Section - Comprehensive */}
      <section id="services" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Onze diensten', 'Our Services')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Alles wat je nodig hebt voor succesvol importeren vanuit China',
                  'Everything you need for successful importing from China'
                )}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Sourcing Service Card */}
              <Card className="p-10 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="space-y-8 flex-grow flex flex-col">
                  {/* Header */}
                  <div className="border-b border-border pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Package className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">{t('Sourcing', 'Sourcing')}</h3>
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {t('Vind de juiste fabrikant', 'Find the right manufacturer')}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg leading-relaxed">
                    {t(
                      'Wij zoeken, selecteren en onderhandelen direct met fabrikanten in China. Zo krijg jij betrouwbare productie, de beste prijs en duidelijke afspraken.',
                      'We search, shortlist, and negotiate directly with factories in China. This ensures reliable production, the best pricing, and clear terms.'
                    )}
                  </p>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Uitdagingen:', 'Challenges:')}</h4>
                    <ul className="space-y-2">
                      {[
                        { nl: 'Urenlang zoeken zonder resultaat', en: 'Hours of searching without results' },
                        { nl: 'Te hoge prijzen door beperkte onderhandelingspositie', en: 'Higher prices due to limited negotiation power' },
                        { nl: 'Onzekerheid over kwaliteit en levertijd', en: 'Uncertainty about quality and lead times' },
                        { nl: "Onduidelijke MOQ's en totale kosten", en: 'Limited visibility on MOQs and total costs' },
                        { nl: 'Risico op onbetrouwbare leveranciers', en: 'Risk of unreliable suppliers' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(item.nl, item.en)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Us */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Waarom wij:', 'Why us:')}</h4>
                    <ul className="space-y-3">
                      {[
                        { nl: 'Gespecialiseerd in sourcing vanuit China', en: 'Specialized in sourcing from China' },
                        { nl: 'Sterk in onderhandelingen voor scherpe prijzen', en: 'Professional negotiations for competitive prices' },
                        { nl: 'Leveranciers gecontroleerd op kwaliteit', en: 'Suppliers verified for quality' },
                        { nl: 'Transparante all-in offertes', en: 'Transparent all-in quotes' },
                        { nl: 'Lokale teams in China & Nederland', en: 'Local teams in China & Netherlands' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{t(item.nl, item.en)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Hoe wij werken:', 'How we work:')}</h4>
                    <div className="space-y-3">
                      {[
                        { step: '1', nl: 'Aanvraag - Jij deelt productdetails en volumes', en: 'Request - You share product details and volumes' },
                        { step: '2', nl: 'Onderzoek & selectie - Wij zoeken en onderhandelen', en: 'Research & selection - We search and negotiate' },
                        { step: '3', nl: 'Resultaten - Je ontvangt all-in prijzen en MOQs', en: 'Results - You receive all-in prices and MOQs' },
                        { step: '4', nl: 'Beslissing - Kies zelfstandig of via ons verder', en: 'Decision - Continue independently or through us' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <p className="text-muted-foreground pt-1">{t(item.nl, item.en)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Pakketten:', 'Packages:')}</h4>
                    <div className="space-y-4">
                      {/* Basic Sourcing - POPULAR */}
                      <div className="border-2 border-primary rounded-lg p-6 bg-primary/5 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                          {t('Populair', 'Popular')}
                        </div>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="font-bold text-lg">Basic Sourcing</h5>
                            <p className="text-sm text-muted-foreground">{t('Shortlist met beste leveranciers', 'Shortlist with best suppliers')}</p>
                          </div>
                          <div className="text-2xl font-bold text-primary">€99</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('Volledig verrekend als je via ons inkoopt', 'Credited in full if you continue with us')}
                        </p>
                      </div>

                      {/* Plus Sourcing */}
                      <div className="border rounded-lg p-6 bg-card">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="font-bold text-lg">Plus Sourcing</h5>
                            <p className="text-sm text-muted-foreground">{t('Inclusief volledige leveranciersgegevens', 'Including full supplier details')}</p>
                          </div>
                          <div className="text-2xl font-bold text-primary">€199</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('Direct contact mogelijk - ideaal om zelf verder te gaan', 'Direct contact enabled - ideal to continue independently')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" onClick={() => scrollToSection('#contact')}>
                    {t('Start sourcing', 'Start sourcing')}
                  </Button>
                </div>
              </Card>

              {/* Logistics Service Card */}
              <Card className="p-10 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="space-y-8 flex-grow flex flex-col">
                  {/* Header */}
                  <div className="border-b border-border pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Truck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">{t('Logistiek', 'Logistics')}</h3>
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {t('Wereldwijd transport vanuit China', 'Worldwide shipping from China')}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg leading-relaxed">
                    {t(
                      'Wij regelen jouw transport volledig vanuit China – snel, veilig en voordelig.',
                      'We manage your transport fully from China – fast, safe, and cost-effective.'
                    )}
                  </p>

                  {/* Transport Options */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Transportopties:', 'Transport options:')}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Plane className="h-8 w-8 text-primary" />
                          <span className="font-semibold">{t('Luchtvracht', 'Air freight')}</span>
                        </div>
                        <span className="text-primary font-bold">3-12 {t('dagen', 'days')}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Ship className="h-8 w-8 text-primary" />
                          <span className="font-semibold">{t('Zeevracht', 'Sea freight')}</span>
                        </div>
                        <span className="text-primary font-bold">20-40 {t('dagen', 'days')}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Train className="h-8 w-8 text-primary" />
                          <span className="font-semibold">{t('Treintransport', 'Rail freight')}</span>
                        </div>
                        <span className="text-primary font-bold">20-30 {t('dagen', 'days')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Why Us */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Waarom wij:', 'Why us:')}</h4>
                    <ul className="space-y-3">
                      {[
                        { nl: 'Gespecialiseerd in import & transport vanuit China', en: 'Specialized in importing & shipping from China' },
                        { nl: 'Concurrerende all-in tarieven inclusief handling fee', en: 'Competitive all-in pricing including handling fee' },
                        { nl: 'Douaneafhandeling volledig geregeld', en: 'Full customs clearance handled' },
                        { nl: 'Real-time tracking en heldere communicatie', en: 'Real-time tracking and clear communication' },
                        { nl: 'Levering rechtstreeks naar jouw deur', en: 'Direct delivery to your door' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{t(item.nl, item.en)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Hoe wij werken:', 'How we work:')}</h4>
                    <div className="space-y-3">
                      {[
                        { step: '1', nl: 'Offerte - Wij berekenen de beste oplossing', en: 'Quote - We calculate the best solution' },
                        { step: '2', nl: 'Ophalen - Bij leverancier of naar ons magazijn', en: 'Pickup - From supplier or to our warehouse' },
                        { step: '3', nl: 'Transport - Veilige verzending met tracking', en: 'Transport - Secure shipping with tracking' },
                        { step: '4', nl: 'Levering - Douaneafhandeling en aflevering', en: 'Delivery - Customs clearance and final delivery' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <p className="text-muted-foreground pt-1">{t(item.nl, item.en)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Who We Work For */}
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t('Voor wie:', 'For whom:')}</h4>
                    <ul className="space-y-2">
                      {[
                        { nl: 'E-commerce bedrijven en start-ups', en: 'E-commerce businesses and startups' },
                        { nl: 'Retailers en groothandels', en: 'Retailers and wholesalers' },
                        { nl: 'Merken met bulkzendingen', en: 'Brands with bulk shipments' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(item.nl, item.en)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="w-full" onClick={() => scrollToSection('#contact')}>
                    {t('Ontdek logistiek', 'Discover logistics')}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-32 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Waarom kiezen voor ons', 'Why choose us')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {usps.map((usp, index) => {
                const Icon = usp.Icon;
                return (
                  <Card key={index} className="p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card border-l-4 border-l-primary h-full flex flex-col">
                    <div className="space-y-6 flex-grow flex flex-col justify-center text-center">
                      <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold leading-tight">{t(usp.textNl, usp.textEn)}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Icon Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {t('Waarom klanten voor ons kiezen', 'Why customers choose us')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
            {iconFeatures.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div key={index} className="flex flex-col items-center text-center gap-6 h-full">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow flex flex-col justify-center">
                    <h3 className="text-2xl font-bold leading-tight">{t(feature.textNl, feature.textEn)}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Orange Services Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                {t('Onze kernexpertise', 'Our core expertise')}
              </h2>
              <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto">
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
                    <div className="h-full space-y-6 text-center flex flex-col">
                      <div className="relative w-full max-w-[220px] mx-auto aspect-square overflow-hidden rounded-2xl bg-white/5 p-4 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={service.image} 
                          alt={t(service.titleNl, service.titleEn)}
                          className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                        />
                      </div>
                      <div className="space-y-3 flex-grow flex flex-col justify-center">
                        <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold">{t(service.titleNl, service.titleEn)}</h3>
                        <p className="text-primary-foreground/90 leading-relaxed px-2">
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
      <section id="sourcing" className="py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Sourcing - Vind de juiste fabrikant', 'Sourcing - Find the right manufacturer')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij zoeken, selecteren en onderhandelen direct met fabrikanten in China. Zo krijg jij betrouwbare productie, de beste prijs en duidelijke afspraken.',
                  'We search, shortlist, and negotiate directly with factories in China. This ensures reliable production, the best pricing, and clear terms.'
                )}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-10 text-center">
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
                      <Card key={i} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
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
            <div className="mb-24">
              <h3 className="text-3xl font-bold mb-10 text-center">
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
              <Card className="p-10 border-2 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full text-sm font-bold shadow-lg">
                  {t('Populair', 'Popular')}
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Star className="h-7 w-7 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Basic Sourcing</h3>
                    <div className="text-5xl font-bold text-primary">€99</div>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-lg">
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
              </Card>

              <Card className="p-10 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Plus Sourcing</h3>
                    <div className="text-5xl font-bold text-primary">€199</div>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed text-lg">
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
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistics" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Logistiek - Wereldwijd transport vanuit China', 'Logistics - Worldwide shipping from China')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij regelen jouw transport volledig vanuit China – snel, veilig en voordelig.',
                  'We manage your transport fully from China – fast, safe, and cost-effective.'
                )}
              </p>
            </div>

            {/* Transport Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Plane className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('Luchtvracht', 'Air Freight')}</h3>
                <div className="text-4xl font-bold text-primary mb-4">3-12 {t('dagen', 'days')}</div>
                <p className="text-muted-foreground flex-grow">{t('Snelste optie voor urgente zendingen', 'Fastest option for urgent shipments')}</p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Ship className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('Zeevracht', 'Sea Freight')}</h3>
                <div className="text-4xl font-bold text-primary mb-4">20-40 {t('dagen', 'days')}</div>
                <p className="text-muted-foreground flex-grow">{t('Meest economisch voor grote volumes', 'Most economical for large volumes')}</p>
              </Card>

              <Card className="p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Train className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('Treintransport', 'Train Transport')}</h3>
                <div className="text-4xl font-bold text-primary mb-4">20-30 {t('dagen', 'days')}</div>
                <p className="text-muted-foreground flex-grow">{t('Balans tussen snelheid en kosten', 'Balance between speed and cost')}</p>
              </Card>
            </div>

            {/* Why choose us for logistics */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-8 text-center">
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

            {/* Who We Work For - Logistics */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">
                {t('Voor wie wij werken:', 'Who we work for:')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{t('E-commerce bedrijven en start-ups die importeren uit China', 'E-commerce businesses and startups importing from China')}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{t('Retailers, groothandels en merken met bulkzendingen', 'Retailers, wholesalers, and brands with bulk shipments')}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{t('Ondernemers die betrouwbare logistiek zoeken', 'Companies needing reliable logistics')}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target-audience" className="py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Voor wie wij werken', 'Who we work for')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Startende ondernemers en bestaande bedrijven met een eigen merk', 'Startups & established brands')}
                </h3>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('E-commerce & marketplace verkopers', 'E-commerce & marketplace sellers')}
                </h3>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Retailers en groothandels', 'Retailers and wholesalers')}
                </h3>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex-grow flex items-center justify-center">
                  {t('Horeca en hotels (non-food)', 'Hospitality & hotels (non-food)')}
                </h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Over ons - Uw partner in groei', 'About us - Your partner in growth')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Wij zijn uw betrouwbare partner voor sourcing en logistiek vanuit China. Met kantoren in Nederland en China bieden wij lokale aanwezigheid, sterke onderhandelingen en complete begeleiding.',
                  'We are your trusted partner for sourcing and logistics from China. With offices in the Netherlands and China, we provide local presence, strong negotiations and full support.'
                )}
              </p>
            </div>

            {/* Our Strengths */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">{t('Onze kracht:', 'Our strengths:')}</h3>
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
            <div className="mb-16">
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
            <div className="mb-16">
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
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">{t('Onze resultaten:', 'Our results:')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary mb-3">5+</div>
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

      {/* Stats Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">5+</div>
              <p className="text-lg text-muted-foreground">{t('jaren ervaring', 'years of experience')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">100+</div>
              <p className="text-lg text-muted-foreground">{t('tevreden klanten', 'satisfied clients')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">10+</div>
              <p className="text-lg text-muted-foreground">{t('landen wereldwijd', 'countries worldwide')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
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
      <section id="contact" className="py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {t('Klaar om te starten?', 'Ready to get started?')}
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                {t('Plan een gratis consultatie of ontvang direct jouw all-in offerte.', 'Book your free consultation or get your all-in quote today.')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 h-full flex flex-col">
                <form className="space-y-6 flex-grow flex flex-col">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('Naam', 'Name')}</label>
                    <Input placeholder={t('Uw naam', 'Your name')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('E-mail', 'Email')}</label>
                    <Input type="email" placeholder={t('uw@email.nl', 'your@email.com')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('Bedrijf', 'Company')}</label>
                    <Input placeholder={t('Uw bedrijfsnaam', 'Your company name')} />
                  </div>
                  <div className="flex-grow">
                    <label className="block text-sm font-medium mb-2">{t('Bericht', 'Message')}</label>
                    <Textarea rows={5} placeholder={t('Uw bericht...', 'Your message...')} className="h-full" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {t('Gratis consultatie plannen', 'Free consultation')}
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6 flex flex-col">
                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('E-mail', 'Email')}</h3>
                      <p className="text-muted-foreground">{t('info@jouwdomein.com', 'info@yourdomain.com')}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('Telefoon', 'Phone')}</h3>
                      <p className="text-muted-foreground">+31 (0)6 1234 5678</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t('Kantoor', 'Offices')}</h3>
                      <p className="text-muted-foreground">{t('Nederland & China', 'Netherlands & China')}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-primary text-primary-foreground flex-grow">
                  <h3 className="text-2xl font-bold mb-4">
                    {t('All-in offerte aanvragen', 'Get all-in quote')}
                  </h3>
                  <p className="mb-6 opacity-90 flex-grow">
                    {t(
                      'Of plan een gratis consultatie om jouw mogelijkheden te bespreken',
                      'Or schedule a free consultation to discuss your options'
                    )}
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    {t('All-in offerte aanvragen', 'Get all-in quote')}
                  </Button>
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
