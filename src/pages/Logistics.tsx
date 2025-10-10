import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Plane, Ship, Train, CheckCircle2, Package, TrendingDown, MapPin } from 'lucide-react';

const Logistics = () => {
  const { t } = useLanguage();

  const whyUs = [
    {
      icon: <MapPin className="h-6 w-6" />,
      titleNl: 'Gespecialiseerd in import & transport vanuit China',
      titleEn: 'Specialized in importing & shipping from China',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      titleNl: 'Concurrerende all-in tarieven inclusief handling fee',
      titleEn: 'Competitive all-in pricing including handling fee',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      titleNl: 'Douaneafhandeling en documentatie volledig geregeld',
      titleEn: 'Full customs clearance and documentation handled',
    },
    {
      icon: <Package className="h-6 w-6" />,
      titleNl: 'Real-time tracking en heldere communicatie',
      titleEn: 'Real-time tracking and clear communication',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      titleNl: 'Levering rechtstreeks van leverancier naar jouw deur',
      titleEn: 'Direct delivery from supplier to your door',
    },
  ];

  const transportOptions = [
    {
      icon: <Plane className="h-16 w-16 text-primary" />,
      titleNl: 'Luchtvracht',
      titleEn: 'Air freight',
      timeNl: '3–12 dagen',
      timeEn: '3–12 days',
    },
    {
      icon: <Ship className="h-16 w-16 text-primary" />,
      titleNl: 'Zeevracht',
      titleEn: 'Sea freight',
      timeNl: '20–40 dagen',
      timeEn: '20–40 days',
    },
    {
      icon: <Train className="h-16 w-16 text-primary" />,
      titleNl: 'Treintransport',
      titleEn: 'Rail freight',
      timeNl: '20–30 dagen',
      timeEn: '20–30 days',
    },
  ];

  const process = [
    {
      step: '1',
      titleNl: 'Offerte',
      titleEn: 'Quote',
      descNl: 'Wij berekenen de meest efficiënte oplossing',
      descEn: 'We calculate the most efficient solution',
    },
    {
      step: '2',
      titleNl: 'Ophalen/verzenden',
      titleEn: 'Pickup/ship',
      descNl: 'Bij leverancier of naar ons magazijn',
      descEn: 'From supplier or to our warehouse',
    },
    {
      step: '3',
      titleNl: 'Transport',
      titleEn: 'Transport',
      descNl: 'Veilige verzending met tracking',
      descEn: 'Secure shipping with tracking',
    },
    {
      step: '4',
      titleNl: 'Levering',
      titleEn: 'Delivery',
      descNl: 'Complete douaneafhandeling en aflevering',
      descEn: 'Full customs clearance and final delivery',
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
                {t('Logistiek —', 'Logistics —')}
                <span className="block bg-hero-gradient bg-clip-text text-transparent">
                  {t('Wereldwijd transport vanuit China', 'Worldwide shipping from China')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t(
                  'Wij regelen jouw transport volledig vanuit China – snel, veilig en voordelig.',
                  'We manage your transport fully from China – fast, safe, and cost-effective.'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">
                    {t('Ontdek logistiek', 'Discover logistics')}
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

        {/* Why Us */}
        <section className="py-20">
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

        {/* Transport Options */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {t('Transportopties', 'Transport options')}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t(
                'Dit zijn gemiddelde doorlooptijden; de werkelijke transportduur kan korter of langer zijn afhankelijk van omstandigheden.',
                'These are average lead times; actual shipping duration may be shorter or longer depending on circumstances.'
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {transportOptions.map((option, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t(option.titleNl, option.titleEn)}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {t(option.timeNl, option.timeEn)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work For */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Voor wie wij werken', 'Who we work for')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <p className="font-medium">
                  {t(
                    'E-commerce bedrijven en start-ups die importeren uit China',
                    'E-commerce businesses and startups importing from China'
                  )}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-medium">
                  {t(
                    'Retailers, groothandels en merken met bulkzendingen',
                    'Retailers, wholesalers, and brands with bulk shipments'
                  )}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="font-medium">
                  {t(
                    'Ondernemers die betrouwbare logistiek zoeken',
                    'Companies needing reliable logistics'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/50">
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

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-2xl p-12 text-center text-primary-foreground max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('Klaar om uw logistiek te optimaliseren?', 'Ready to optimize your logistics?')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t(
                  'Ontvang een gratis all-in offerte voor uw transport uit China',
                  'Get a free all-in quote for your shipment from China'
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

export default Logistics;
