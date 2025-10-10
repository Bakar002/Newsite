import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Package, Truck, Headphones } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Package className="h-16 w-16 text-primary" />,
      titleNl: 'Sourcing & inkoop',
      titleEn: 'Sourcing & purchasing',
      descNl: 'Betrouwbare fabrikanten in China, scherpe prijzen, gecontroleerde kwaliteit.',
      descEn: 'Trusted manufacturers in China, competitive pricing, verified quality.',
      link: '/sourcing',
    },
    {
      icon: <Truck className="h-16 w-16 text-primary" />,
      titleNl: 'Logistiek & verzending',
      titleEn: 'Logistics & shipping',
      descNl: 'Zee-, lucht- en treintransport met douaneafhandeling.',
      descEn: 'Sea, air and rail, including customs clearance.',
      link: '/logistics',
    },
    {
      icon: <Headphones className="h-16 w-16 text-primary" />,
      titleNl: 'Advies & ondersteuning',
      titleEn: 'Advisory & support',
      descNl: 'Praktische begeleiding voor starters en gevestigde bedrijven.',
      descEn: 'Practical guidance for startups and established brands.',
      link: '/about',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              {t('Onze diensten', 'Our Services')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t(
                'Kies wat je nodig hebt: alleen sourcing, alleen logistiek of een complete all-in oplossing.',
                'Choose what you need: sourcing only, logistics only, or a complete all-in solution.'
              )}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-10 hover:shadow-lg transition-all text-center">
                <div className="mb-8 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {t(service.titleNl, service.titleEn)}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {t(service.descNl, service.descEn)}
                </p>
                <Button asChild variant="outline" size="lg" className="w-full border-2">
                  <Link to={service.link}>
                    {t('Meer informatie', 'Learn more')} →
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-3xl p-16 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {t('Klaar om te starten?', 'Ready to start?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t(
                'Kies wat je nodig hebt en start vandaag',
                'Choose what you need and start today'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-7 h-auto shadow-lg">
                <Link to="/contact">
                  👉 {t('Ontdek onze diensten | Bespaar direct', 'Explore our services | Start saving today')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
