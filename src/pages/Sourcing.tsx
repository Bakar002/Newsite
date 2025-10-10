import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, Search, Users, Package, TrendingDown, Clock } from 'lucide-react';

const Sourcing = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      iconNl: 'Urenlang zoeken zonder resultaat',
      iconEn: 'Hours of searching without results',
    },
    {
      iconNl: 'Te hoge prijzen door beperkte onderhandelingspositie',
      iconEn: 'Higher prices due to limited negotiation power',
    },
    {
      iconNl: 'Onzekerheid over kwaliteit en levertijd',
      iconEn: 'Uncertainty about quality and lead times',
    },
    {
      iconNl: "Onduidelijke MOQ's en totale kosten",
      iconEn: 'Limited visibility on MOQs and total costs',
    },
    {
      iconNl: 'Risico op onbetrouwbare leveranciers',
      iconEn: 'Risk of unreliable suppliers or middlemen',
    },
  ];

  const whyUs = [
    {
      icon: <Search className="h-6 w-6" />,
      titleNl: 'Gespecialiseerd in sourcing vanuit China',
      titleEn: 'Specialized in sourcing from China',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      titleNl: 'Sterk in onderhandelingen voor scherpe prijzen',
      titleEn: 'Professional negotiations for competitive prices',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      titleNl: 'Leveranciers gecontroleerd op kwaliteit en certificeringen',
      titleEn: 'Suppliers verified for quality and certifications',
    },
    {
      icon: <Package className="h-6 w-6" />,
      titleNl: 'Transparante all-in offertes inclusief handling fee',
      titleEn: 'Transparent all-in quotes including handling fee',
    },
    {
      icon: <Users className="h-6 w-6" />,
      titleNl: 'Lokale teams in China & Nederland voor communicatie en toezicht',
      titleEn: 'Local teams in China & the Netherlands for fast communication',
    },
  ];

  const process = [
    {
      step: '1',
      titleNl: 'Aanvraag',
      titleEn: 'Request',
      descNl: 'Jij deelt productdetails, wensen en volumes',
      descEn: 'You share product details, requirements and volumes',
    },
    {
      step: '2',
      titleNl: 'Onderzoek & selectie',
      titleEn: 'Research & selection',
      descNl: 'Wij zoeken, vergelijken, onderhandelen en controleren leveranciers',
      descEn: 'We search, compare, negotiate and vet suppliers',
    },
    {
      step: '3',
      titleNl: 'Resultaten',
      titleEn: 'Results',
      descNl: "Je ontvangt een overzicht met all in prijzen, MOQ's, levertijden en (optioneel) samples",
      descEn: 'You receive a report with all in prices, MOQs, lead times and (optional) samples',
    },
    {
      step: '4',
      titleNl: 'Beslissing',
      titleEn: 'Decision',
      descNl: 'Jij kiest: zelfstandig verder (Plus) of doorgaan met inkoop & productie via ons',
      descEn: 'You choose: continue independently (Plus) or proceed with procurement via us',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('Sourcing —', 'Sourcing —')}
                <span className="block bg-hero-gradient bg-clip-text text-transparent">
                  {t('Vind de juiste fabrikant', 'Find the right manufacturer')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t(
                  'Wij zoeken, selecteren en onderhandelen direct met fabrikanten in China. Zo krijg jij betrouwbare productie, de beste prijs en duidelijke afspraken.',
                  'We search, shortlist, and negotiate directly with factories in China. This ensures reliable production, the best pricing, and clear terms.'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">
                    {t('Start sourcing – €99', 'Start sourcing – €99')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    {t('All-in offerte aanvragen', 'Get all-in quote')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Uitdagingen in het sourcingproces', 'Challenges in sourcing')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-destructive mt-1">✗</div>
                    <p className="font-medium">
                      {t(challenge.iconNl, challenge.iconEn)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Waarom kiezen voor ons', 'Why choose us')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {item.icon}
                    </div>
                    <p className="font-medium">
                      {t(item.titleNl, item.titleEn)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Hoe wij werken', 'How we work')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(step.titleNl, step.titleEn)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(step.descNl, step.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Pakketten', 'Packages')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic */}
              <Card className="p-8 border-primary border-2 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {t('Populair', 'Popular')}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Basic Sourcing</h3>
                  <div className="text-4xl font-bold text-primary mb-2">€99</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('Shortlist met beste leveranciers en prijzen', 'Shortlist with best suppliers and prices')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t("Vergelijking op kwaliteit, MOQ en levertijd", 'Comparison of quality, MOQs, and lead times')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('Volledig verrekend als je via ons inkoopt', 'Credited in full if you continue with us')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    {t('Start Basic', 'Start Basic')}
                  </Link>
                </Button>
              </Card>

              {/* Plus */}
              <Card className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Plus Sourcing</h3>
                  <div className="text-4xl font-bold text-primary mb-2">€199</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('Alles van Basic', 'Everything in Basic')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('Volledige leveranciersgegevens → direct contact mogelijk', 'Full supplier details → direct contact enabled')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('Ideaal als je zelf verder wilt gaan', 'Ideal if you prefer to continue independently')}</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    {t('Start Plus', 'Start Plus')}
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-2xl p-12 text-center text-primary-foreground max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('Klaar om te beginnen met sourcing?', 'Ready to start sourcing?')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t(
                  'Ontvang binnen 3-5 werkdagen een shortlist met geschikte fabrikanten',
                  'Receive a shortlist of suitable manufacturers within 3-5 working days'
                )}
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">
                  {t('Neem contact op', 'Get in touch')} →
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sourcing;
