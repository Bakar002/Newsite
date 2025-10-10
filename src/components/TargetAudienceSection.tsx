import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Building2, ShoppingCart, Store, Hotel } from 'lucide-react';

const TargetAudienceSection = () => {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      titleNl: 'Startende ondernemers en bestaande bedrijven met een eigen merk',
      titleEn: 'Startups & established brands',
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      titleNl: 'E-commerce & marketplace verkopers',
      titleEn: 'E-commerce & marketplace sellers',
    },
    {
      icon: <Store className="h-8 w-8 text-primary" />,
      titleNl: 'Retailers en groothandels',
      titleEn: 'Retailers and wholesalers',
    },
    {
      icon: <Hotel className="h-8 w-8 text-primary" />,
      titleNl: 'Horeca en hotels (non-food)',
      titleEn: 'Hospitality & hotels (non-food)',
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('Voor wie wij werken', 'Who we work for')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/20">
              <div className="flex justify-center mb-6">
                {audience.icon}
              </div>
              <p className="font-semibold leading-relaxed text-lg">
                {t(audience.titleNl, audience.titleEn)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
