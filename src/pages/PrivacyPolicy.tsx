import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  const privacyContent = {
    nl: {
      title: 'Privacybeleid',
      lastUpdated: 'Laatst bijgewerkt: Oktober 2025',
      sections: [
        {
          title: '1. Wie wij zijn',
          content: `Storeify ("wij", "ons", "onze") is een handelsbedrijf gevestigd in Nederland, gespecialiseerd in sourcing en logistiek vanuit China. Wij helpen bedrijven wereldwijd bij het vinden van betrouwbare fabrikanten, onderhandelingen en transportoplossingen.

Bedrijfsgegevens:
• Bedrijfsnaam: Storeify
• KvK: 83929991
• BTW: NL003892322B46
• E-mail: contact@storefiy.co
• Vestiging: Nederland (met partners in Shenzhen, China)

Storeify is verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.`
        },
        {
          title: '2. Welke persoonsgegevens wij verwerken',
          content: `Wij verwerken uitsluitend gegevens die noodzakelijk zijn voor onze B2B-dienstverlening, waaronder:
• Naam, bedrijfsnaam en functie;
• E-mailadres en telefoonnummer;
• Communicatie-inhoud (vragen, offertes, projectinformatie);
• Factuur- en betaalgegevens (bij samenwerking);
• Transport- en leveringsgegevens (zie artikel 10).

Wij gebruiken geen cookies of trackingtools op onze website.`
        },
        {
          title: '3. Doelen van gegevensverwerking',
          content: `Wij gebruiken persoonsgegevens uitsluitend voor de volgende doeleinden:
1. Het beantwoorden van vragen en het uitbrengen van offertes;
2. Het voorbereiden en uitvoeren van sourcing- en logistieke opdrachten;
3. Communicatie met klanten, leveranciers en partners;
4. Administratie, facturatie en naleving van wettelijke verplichtingen;
5. Analyse en verbetering van onze dienstverlening.

Wij gebruiken persoonsgegevens niet voor marketing zonder toestemming.`
        },
        {
          title: '4. Rechtsgrond van verwerking',
          content: `Wij verwerken persoonsgegevens op basis van:
• Uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG);
• Wettelijke verplichting (art. 6 lid 1 sub c AVG), zoals boekhouding;
• Gerechtvaardigd belang (art. 6 lid 1 sub f AVG), zoals beveiliging en bedrijfscontinuïteit.`
        },
        {
          title: '5. Bewaartermijnen',
          content: `Wij bewaren persoonsgegevens niet langer dan noodzakelijk:
• Contact- en communicatiegegevens: maximaal 12 maanden na laatste contact;
• Administratieve gegevens (facturen): 7 jaar (wettelijke termijn);
• Transport- en leveringsgegevens: zolang nodig voor uitvoering en wettelijke administratie.

Na afloop worden gegevens veilig verwijderd of geanonimiseerd.`
        },
        {
          title: '6. Delen van gegevens met derden',
          content: `Storeify deelt persoonsgegevens alleen wanneer dit noodzakelijk is voor de uitvoering van onze diensten. Mogelijke ontvangers zijn:
• Logistieke partners, leveranciers en kwaliteitsinspectiebedrijven in China;
• Douaneautoriteiten, transporteurs en verzekeringsmaatschappijen;
• IT- en administratieve dienstverleners (hosting, e-mail, boekhouding).

Met alle externe partijen worden passende afspraken gemaakt om jouw privacy te waarborgen. Storeify verkoopt geen persoonsgegevens aan derden.`
        },
        {
          title: '7. Internationale gegevensverwerking',
          content: `Omdat wij samenwerken met partners in China kan verwerking buiten de EU plaatsvinden. In dat geval:
• Delen wij uitsluitend de minimaal noodzakelijke gegevens;
• Werken wij met betrouwbare partners;
• Toepassen wij EU Standard Contractual Clauses (SCC's) of vergelijkbare waarborgen.`
        },
        {
          title: '8. Beveiliging van persoonsgegevens',
          content: `Wij nemen technische en organisatorische maatregelen om persoonsgegevens te beschermen, waaronder:
• Versleutelde verbindingen (SSL/TLS);
• Sterke wachtwoorden en beperkte toegang;
• Interne beveiligingsprocedures en audits;
• Regelmatige updates en beveiligingscontroles.`
        },
        {
          title: '9. Jouw rechten',
          content: `Je hebt recht op:
• Inzage in jouw persoonsgegevens;
• Correctie van onjuiste gegevens;
• Verwijdering ("recht op vergetelheid");
• Beperking of bezwaar tegen verwerking;
• Overdraagbaarheid van gegevens.

Je kunt je rechten uitoefenen via contact@storefiy.co. Wij reageren binnen 30 dagen. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.`
        },
        {
          title: '10. Transport- en leveringsgegevens',
          content: `Voor het uitvoeren van logistieke diensten verwerken wij gegevens die nodig zijn voor verzending en levering van goederen, zoals:
• Naam en contactpersoon van de ontvanger;
• Leveradres en bedrijfsinformatie;
• Order- en referentienummers;
• Transport- en douanedocumenten.

Deze gegevens worden uitsluitend gebruikt voor correcte en tijdige levering en kunnen worden gedeeld met transporteurs, douaneautoriteiten en verzekeringsmaatschappijen. Bij transport buiten de EU zorgen wij voor beveiligde overdracht en samenwerking met betrouwbare partners.`
        },
        {
          title: '11. Aansprakelijkheid',
          content: `Storeify behandelt persoonsgegevens vertrouwelijk en met zorg. Wij zijn niet aansprakelijk voor verlies of misbruik van gegevens veroorzaakt door:
• Overmacht of technische storingen buiten onze controle;
• Onjuiste of onvolledige informatie van derden;
• Externe partijen die gegevens verwerken onder eigen verantwoordelijkheid (zoals logistiek of verzekering).`
        },
        {
          title: '12. Wijzigingen',
          content: `Wij kunnen dit privacybeleid wijzigen bij aanpassingen in wetgeving of bedrijfsvoering. De meest recente versie is altijd beschikbaar op www.storefiy.co.`
        },
        {
          title: '13. Contact',
          content: `Voor vragen of verzoeken over dit privacybeleid kun je contact opnemen via:
📧 contact@storefiy.co
📍 Storeify — gevestigd in Nederland, actief wereldwijd`
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 2025',
      sections: [
        {
          title: '1. Who We Are',
          content: `Storeify ("we", "our", "us") is a Netherlands-based company specializing in sourcing and logistics from China. We help businesses worldwide find reliable manufacturers, negotiate, and arrange transport.

Company details:
• Chamber of Commerce: 83929991
• VAT: NL003892322B46
• Email: contact@storefiy.co
• Location: The Netherlands (with partners in Shenzhen, China)

Storeify is the data controller for the processing described in this policy.`
        },
        {
          title: '2. Personal Data We Collect',
          content: `We only collect data necessary to perform our services, including:
• Name, company name and position;
• Email address and phone number;
• Inquiry and project communication;
• Billing and payment information;
• Shipping and delivery data (see Section 10).

We do not use cookies or tracking tools on our website.`
        },
        {
          title: '3. Purpose of Processing',
          content: `We process personal data only to:
1. Respond to inquiries and provide quotations;
2. Prepare and execute sourcing or logistics projects;
3. Maintain business relations with clients and suppliers;
4. Fulfil administrative and legal obligations;
5. Improve our services.

No marketing use without consent.`
        },
        {
          title: '4. Legal Basis',
          content: `We process data under:
• Performance of a contract (Art. 6(1)(b) GDPR);
• Legal obligation (Art. 6(1)(c) GDPR);
• Legitimate interest (Art. 6(1)(f) GDPR).`
        },
        {
          title: '5. Data Retention',
          content: `• Contact data: up to 12 months after last interaction;
• Accounting data: 7 years (legal obligation);
• Shipping data: as required for delivery and compliance.

Afterwards, data are securely deleted or anonymized.`
        },
        {
          title: '6. Sharing with Third Parties',
          content: `We share personal data only when necessary to deliver our services, including:
• Logistics partners and suppliers in China;
• Customs authorities, carriers and insurers;
• IT, hosting and accounting providers.

All partners must meet appropriate privacy and security standards. Storeify does not sell personal data.`
        },
        {
          title: '7. International Transfers',
          content: `Because our operations involve China, data may be processed outside the EU. We limit transfers to what is necessary and apply safeguards such as EU Standard Contractual Clauses (SCCs).`
        },
        {
          title: '8. Data Security',
          content: `We use SSL/TLS encryption, restricted access, secure storage, and internal control procedures to protect personal data.`
        },
        {
          title: '9. Your Rights',
          content: `You have the right to request access, correction, deletion, restriction, objection and data portability. Requests may be sent to contact@storefiy.co. We respond within 30 days. You may also file a complaint with your national data protection authority.`
        },
        {
          title: '10. Shipping and Delivery Data',
          content: `To perform logistics services, we process shipment-related information such as:
• Recipient name and contact;
• Delivery address and company info;
• Order and reference numbers;
• Customs and transport documents.

These are used only for shipment execution and may be shared with carriers, customs or insurers where necessary. For non-EU shipments, we ensure secure transfer and reliable partners.`
        },
        {
          title: '11. Liability',
          content: `Storeify handles personal data confidentially and with care. We are not liable for loss or misuse caused by:
• Force majeure or technical failures;
• Incorrect or incomplete data provided by third parties;
• Independent processing by external partners.`
        },
        {
          title: '12. Changes',
          content: `We may update this policy to reflect legal or operational changes. The latest version is always available at www.storefiy.co.`
        },
        {
          title: '13. Contact',
          content: `For privacy questions or requests:
📧 contact@storefiy.co
📍 Storeify — based in the Netherlands, operating worldwide`
        }
      ]
    }
  };

  const content = privacyContent[t('nl', 'en')];

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

export default PrivacyPolicy;
