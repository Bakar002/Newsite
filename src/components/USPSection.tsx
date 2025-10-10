import { CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const USPSection = () => {
  const { t } = useLanguage();

  const usps = [
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      titleNl: 'Betrouwbare leveranciers in China',
      titleEn: 'Trusted suppliers in China',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      titleNl: 'Transparante all-in prijzen',
      titleEn: 'Transparent all-in pricing',
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      titleNl: 'Kwaliteitscontrole bij productie en levering',
      titleEn: 'Quality control during production & delivery',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      titleNl: 'Eén vast aanspreekpunt voor het hele proces',
      titleEn: 'One dedicated contact for the entire process',
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {usp.icon}
              </div>
              <h3 className="font-semibold text-foreground">
                {t(usp.titleNl, usp.titleEn)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
