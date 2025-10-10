import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Search, Handshake, Shield, Truck } from 'lucide-react';

const OrangeServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Search className="h-12 w-12" />,
      titleNl: 'Sourcing',
      titleEn: 'Sourcing',
      descNl: 'Vind en selecteer betrouwbare leveranciers',
      descEn: 'Find and select trusted suppliers',
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      titleNl: 'Onderhandelingen',
      titleEn: 'Negotiations',
      descNl: 'Bespaar met onze ervaren onderhandelaars',
      descEn: 'Save more with our experts',
    },
    {
      icon: <Shield className="h-12 w-12" />,
      titleNl: 'Kwaliteitscontrole',
      titleEn: 'Quality control',
      descNl: 'Lokale teams in China voor toezicht',
      descEn: 'Local teams in China for oversight',
    },
    {
      icon: <Truck className="h-12 w-12" />,
      titleNl: 'Logistiek',
      titleEn: 'Logistics',
      descNl: 'Complete all-in transportoplossingen uit China',
      descEn: 'Complete all-in transport solutions from China',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('Onze kernservices', 'Our core services')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-10 text-center bg-primary text-primary-foreground hover:shadow-2xl transition-all hover:-translate-y-2 border-none group cursor-pointer"
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">
                {t(service.titleNl, service.titleEn)}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {t(service.descNl, service.descEn)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrangeServicesSection;
