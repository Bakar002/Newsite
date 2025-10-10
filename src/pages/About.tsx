import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Globe, Award, MapPin } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      titleNl: 'Sterk netwerk van fabrikanten en logistieke partners in China',
      titleEn: 'Strong network of factories and logistics partners in China',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      titleNl: 'Teams in China én Nederland voor begeleiding en communicatie',
      titleEn: 'Teams in both China and the Netherlands for support and communication',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      titleNl: 'Transparante all-in prijzen inclusief sourcing, logistiek en handling fee',
      titleEn: 'Transparent all-in pricing covering sourcing, logistics, and handling fee',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      titleNl: 'Focus op beste prijs-kwaliteit en maximale marge voor onze klanten',
      titleEn: 'Focus on best price-quality and maximizing customer margins',
    },
  ];

  const values = [
    {
      titleNl: 'Persoonlijke aanpak',
      titleEn: 'Personal approach',
      descNl: 'Elk project krijgt persoonlijke aandacht en begeleiding',
      descEn: 'Every project receives personal attention and guidance',
    },
    {
      titleNl: 'Internationaal netwerk',
      titleEn: 'International network',
      descNl: 'Directe toegang tot fabrikanten en partners in China',
      descEn: 'Direct access to manufacturers and partners in China',
    },
    {
      titleNl: 'Bewezen kwaliteit',
      titleEn: 'Proven quality',
      descNl: 'Gecontroleerde leveranciers en kwaliteitsborging',
      descEn: 'Verified suppliers and quality assurance',
    },
  ];

  const stats = [
    { value: '5+', labelNl: 'jaar ervaring', labelEn: 'years of experience' },
    { value: '100+', labelNl: 'tevreden klanten', labelEn: 'satisfied clients' },
    { value: '10+', labelNl: 'landen wereldwijd', labelEn: 'countries worldwide' },
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
                {t('Over ons —', 'About us —')}
                <span className="block bg-hero-gradient bg-clip-text text-transparent">
                  {t('Uw partner in groei', 'Your partner in growth')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t(
                  'Wij zijn uw betrouwbare partner voor sourcing en logistiek vanuit China. Met kantoren in Nederland en China bieden wij lokale aanwezigheid, sterke onderhandelingen en complete begeleiding.',
                  'We are your trusted partner for sourcing and logistics from China. With offices in the Netherlands and China, we provide local presence, strong negotiations and full support.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Our Strengths */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Onze kracht', 'Our strengths')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {strengths.map((strength, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {strength.icon}
                    </div>
                    <p className="font-medium">
                      {t(strength.titleNl, strength.titleEn)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Onze waarden', 'Our values')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold mb-3">
                    {t(value.titleNl, value.titleEn)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(value.descNl, value.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {t('Onze missie', 'Our mission')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Wij geloven dat inkopen en transporteren vanuit China eenvoudiger, transparanter en winstgevender kan. Daarom ondersteunen wij ondernemers met directe inkoop bij fabrikanten, scherpe onderhandelingen en efficiënte logistieke oplossingen.',
                  'We believe sourcing and shipping from China should be easier, more transparent, and more profitable. That\'s why we support entrepreneurs with direct factory sourcing, strong negotiations, and efficient logistics.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Onze aanwezigheid', 'Our presence')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {t('Kantoor Nederland', 'Netherlands Office')}
                </h3>
                <p className="text-muted-foreground mb-2">Amsterdam</p>
                <p className="text-sm text-muted-foreground">
                  {t('Commercieel team & accountmanagement', 'Commercial team & account management')}
                </p>
              </Card>
              <Card className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {t('Kantoor China', 'China Office')}
                </h3>
                <p className="text-muted-foreground mb-2">Shenzhen</p>
                <p className="text-sm text-muted-foreground">
                  {t('Kwaliteitscontrole & leveranciersmanagement', 'Quality control & supplier management')}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('Onze resultaten', 'Our results')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {t(stat.labelNl, stat.labelEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-2xl p-12 text-center text-primary-foreground max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('Klaar om samen te werken?', 'Ready to work together?')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t(
                  'Ontdek hoe wij uw business kunnen helpen groeien',
                  'Discover how we can help grow your business'
                )}
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/contact">
                  {t('Gratis consultatie aanvragen', 'Request free consultation')} →
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

export default About;
