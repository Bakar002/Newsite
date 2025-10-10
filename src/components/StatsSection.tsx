import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      numberNl: '5+',
      numberEn: '5+',
      labelNl: 'jaar ervaring',
      labelEn: 'years of experience',
    },
    {
      numberNl: '100+',
      numberEn: '100+',
      labelNl: 'tevreden klanten',
      labelEn: 'satisfied clients',
    },
    {
      numberNl: '10+',
      numberEn: '10+',
      labelNl: 'landen wereldwijd',
      labelEn: 'countries worldwide',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                {t(stat.numberNl, stat.numberEn)}
              </div>
              <p className="text-lg text-muted-foreground">
                {t(stat.labelNl, stat.labelEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
