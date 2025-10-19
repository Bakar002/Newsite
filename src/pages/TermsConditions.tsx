import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TermsConditions = () => {
  const { t } = useLanguage();

  const termsContent = {
    nl: {
      title: 'Algemene Voorwaarden',
      lastUpdated: 'Laatst bijgewerkt: Oktober 2025',
      sections: [
        {
          title: '1. Definities',
          content: `In deze voorwaarden wordt verstaan onder:
• Storeify: de onderneming gevestigd in Nederland, actief in sourcing en logistiek vanuit China.
• Klant: iedere zakelijke partij (B2B) die gebruikmaakt van diensten van Storeify.
• Overeenkomst: iedere afspraak tussen Storeify en de klant met betrekking tot sourcing, productie, transport of aanverwante diensten.
• Partner: derde partij waarmee Storeify samenwerkt, zoals producenten, kwaliteitsinspecteurs of transportbedrijven.`
        },
        {
          title: '2. Toepasselijkheid',
          content: `1. Deze voorwaarden zijn van toepassing op alle offertes, diensten, overeenkomsten en leveringen van Storeify.
2. Afwijkingen zijn alleen geldig als deze schriftelijk zijn bevestigd door Storeify.
3. Door een opdracht te plaatsen verklaart de klant deze voorwaarden te hebben gelezen en ermee akkoord te gaan.`
        },
        {
          title: '3. Diensten',
          content: `1. Storeify bemiddelt in inkoop, productiebegeleiding, kwaliteitscontrole en logistiek transport van goederen vanuit China naar bestemmingen wereldwijd.
2. Storeify werkt uitsluitend voor zakelijke klanten (B2B).
3. Storeify voert haar werkzaamheden met zorg uit, maar is afhankelijk van externe partijen (fabrikanten, transporteurs, douane, enz.).`
        },
        {
          title: '4. Offertes en betalingen',
          content: `1. Alle offertes zijn vrijblijvend, tenzij schriftelijk anders vermeld.
2. Betaling geschiedt volgens de volgende afspraken:
   o Nieuwe klanten: 100% vooruitbetaling;
   o Vaste klanten: 50% aanbetaling bij akkoord, 50% vóór verzending.
3. Storeify heeft het recht werkzaamheden op te schorten bij uitblijven van betaling.
4. Alle prijzen zijn exclusief BTW, tenzij anders vermeld.`
        },
        {
          title: '5. Levertijden',
          content: `1. Alle opgegeven levertijden zijn indicatief en kunnen afwijken.
2. Vertragingen kunnen ontstaan door productie, transportcapaciteit, douane, weersomstandigheden of andere externe factoren.
3. Storeify is niet aansprakelijk voor vertragingen veroorzaakt door derden of overmacht.
4. Levering kan eerder of later plaatsvinden dan aangegeven; dit geeft de klant geen recht op schadevergoeding of annulering.`
        },
        {
          title: '6. Transport en risico-overdracht',
          content: `1. Vanaf het moment dat goederen door de leverancier of transporteur zijn overgedragen, gaat het risico over op de klant.
2. Storeify is niet aansprakelijk voor schade, verlies of vertraging tijdens transport, tenzij schriftelijk anders overeengekomen.
3. De klant dient de goederen direct bij ontvangst te inspecteren en eventuele schade of afwijkingen binnen 3 dagen te melden.`
        },
        {
          title: '7. Verzekering',
          content: `1. Storeify biedt klanten de mogelijkheid om optioneel een transportverzekering af te sluiten via betrouwbare internationale partners.
2. Indien de klant geen verzekering afsluit, vindt verzending plaats voor eigen risico.
3. Storeify is niet aansprakelijk voor schade, verlies of vertraging indien geen verzekering is afgesloten.
4. Storeify bemiddelt uitsluitend en is niet verantwoordelijk voor de uitvoering of afhandeling van verzekeringsclaims.`
        },
        {
          title: '8. Overmacht',
          content: `1. Storeify is niet aansprakelijk voor schade of vertraging als gevolg van overmacht, waaronder (maar niet beperkt tot): natuurrampen, oorlog, pandemieën, stakingen, douanecontroles, transportbeperkingen, brand of storingen bij leveranciers.
2. Tijdens overmacht wordt de uitvoering van de overeenkomst opgeschort zolang de oorzaak voortduurt.`
        },
        {
          title: '9. Aansprakelijkheid',
          content: `1. Storeify is niet aansprakelijk voor indirecte schade, gevolgschade, winstderving of verlies van gegevens.
2. Eventuele aansprakelijkheid van Storeify is beperkt tot het factuurbedrag van de betreffende opdracht.
3. Schadeclaims dienen binnen 7 dagen na ontdekking schriftelijk te worden ingediend.`
        },
        {
          title: '10. Klachten en geschillen',
          content: `1. Klachten dienen schriftelijk te worden ingediend via contact@storefiy.co.
2. Storeify streeft ernaar klachten binnen een redelijke termijn op te lossen.
3. Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.
4. Geschillen worden voorgelegd aan de bevoegde rechtbank te Rotterdam, Nederland.`
        },
        {
          title: '11. Wijzigingen',
          content: `Storeify behoudt zich het recht voor deze voorwaarden te wijzigen. De meest recente versie is altijd te vinden op www.storefiy.co.`
        }
      ]
    },
    en: {
      title: 'Terms and Conditions',
      lastUpdated: 'Last updated: October 2025',
      sections: [
        {
          title: '1. Definitions',
          content: `• Storeify: the company based in the Netherlands, providing sourcing and logistics services from China.
• Client: any business customer (B2B) using Storeify's services.
• Agreement: any arrangement between Storeify and the client regarding sourcing, manufacturing, or logistics.
• Partner: third parties engaged by Storeify, such as manufacturers, inspectors or carriers.`
        },
        {
          title: '2. Applicability',
          content: `1. These Terms apply to all quotations, services, agreements, and deliveries by Storeify.
2. Deviations are valid only if confirmed in writing by Storeify.
3. By placing an order, the client accepts these Terms.`
        },
        {
          title: '3. Services',
          content: `1. Storeify assists in product sourcing, production, quality inspection and logistics from China to worldwide destinations.
2. Services are strictly for business clients (B2B).
3. Storeify performs its work with care but depends on external partners such as suppliers, carriers, and customs.`
        },
        {
          title: '4. Quotations and Payment',
          content: `1. All quotations are non-binding unless otherwise stated.
2. Payment terms:
   o New clients: 100% prepayment;
   o Regular clients: 50% deposit, 50% before shipment.
3. Storeify may suspend work if payment is delayed.
4. All prices exclude VAT unless stated otherwise.`
        },
        {
          title: '5. Delivery Times',
          content: `1. All delivery times are estimates and may vary.
2. Delays may result from production, transport capacity, customs, weather, or other external factors.
3. Storeify cannot be held liable for delays caused by third parties or force majeure.
4. Early or late delivery does not entitle the client to compensation or cancellation.`
        },
        {
          title: '6. Transport and Risk Transfer',
          content: `1. Risk passes to the client once goods are handed over to the supplier or carrier.
2. Storeify is not liable for loss, damage, or delay during transport unless agreed otherwise in writing.
3. The client must inspect goods upon receipt and report issues within 3 days.`
        },
        {
          title: '7. Insurance',
          content: `1. Clients may optionally purchase cargo insurance through Storeify's trusted partners.
2. If no insurance is purchased, shipment is at the client's own risk.
3. Storeify is not liable for any damage, loss, or delay when no insurance has been taken.
4. Storeify acts solely as an intermediary and is not responsible for claims handling.`
        },
        {
          title: '8. Force Majeure',
          content: `1. Storeify is not liable for damage or delays due to force majeure, including natural disasters, pandemics, war, strikes, customs delays, transport restrictions or supplier issues.
2. During force majeure, execution of the agreement is suspended while the cause persists.`
        },
        {
          title: '9. Liability',
          content: `1. Storeify is not liable for indirect, consequential or financial losses.
2. Any liability is limited to the invoice amount of the relevant order.
3. Claims must be submitted in writing within 7 days of discovery.`
        },
        {
          title: '10. Complaints and Disputes',
          content: `1. Complaints must be sent in writing to contact@storefiy.co.
2. Storeify will aim to resolve issues within a reasonable time.
3. Dutch law applies exclusively.
4. Disputes shall be submitted to the court of Rotterdam, The Netherlands.`
        },
        {
          title: '11. Amendments',
          content: `Storeify reserves the right to amend these Terms. The latest version is always available at www.storefiy.co.`
        }
      ]
    }
  };

  const content = termsContent[t('nl', 'en')];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {content.lastUpdated}
            </p>
          </div>

          <Card className="p-8 lg:p-12">
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {section.title}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {index < content.sections.length - 1 && (
                    <Separator className="mt-8" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
