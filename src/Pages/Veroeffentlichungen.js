import classes from './Veroeffentlichungen.module.css';
import Publication from '../components/Publication';

import coverTransformation from '../assets/Cover Flohr 2021 Digitalisierung und Nachhaltigkeit 2021 978-3-662-61534-8.jpg';
import coverSuffizienz from '../assets/Cover Flohr & Markus 2020 Suffizienz an Hochschulen im ländlichen Raum.png';
import coverNachhaltigkeitsnetzwerke from '../assets/Cover Flohr 2019 Nachhaltigkeitsnetzwerke von Hochschulinitiativen.jpg';
import coverBNE from '../assets/Cover Flohr 2017 Studie Staatliche Förderung außerschulischer BNE in Deutschland.jpg';
import Container from '../components/UI/Container';

const publications = [
  {
    id: '1',
    title: 'Transformation durch Digitalisierung gestalten',
    image: coverTransformation,
    abstract: [
      'Aus dem Symposium Digitalisierung und Nachhaltigkeit: Chancen und Perspektiven für Deutsche Hochschulen, das im Frühjahr 2019 an der Hochschule für Angewandte Wissenschaften Hamburg stattfand (siehe Bericht hier), ist ein schöner Sammelband entstanden. Im fünften Kapitel widme ich mich dem Themenfeld Digitalisierung, Nachhaltigkeit und Hochschule.',
      'Das netzwerk n betreibt seit 2014 die Onlineplattform plattform n, die darauf ausgerichtet ist, der Community von nachhaltigkeitsengagierten Einzelpersonen und Initiativen an Hochschulen in Deutschland ein wertefundiertes Tool zur Vernetzung, Kooperation und externen Kommunikation der eigenen Tätigkeiten bereitzustellen. Das Innovationspotenzial der Plattform ergibt sich daraus, dass sie Open Source, Green IT, Gemeinnützigkeit, Datenschutz, Privatsphäre sowie intuitive und umfassende Funktionalität verbindet. Zudem wird sie in einem Verbund aus sozial-ökologisch orientierten gemeinnützigen Organisationen kooperativ weiterentwickelt und solidarisch kofinanziert. Als digitales Tool für nachhaltige Hochschulen trägt die plattform n zur Umsetzung der Sustainable Development Goals der Agenda 2030 und des Nationalen Aktionsplans im Weltaktionsprogramm Bildung für nachhaltige Entwicklung in Deutschland bei und zeigt, welche Hebelwirkung die Digitalisierung für die Transformation von Hochschulen in Richtung einer nachhaltigen Entwicklung entfalten kann. Der Beitrag bietet einen Überblick über das Handlungsfeld der nachhaltigen Hochschulentwicklung, setzt es in Relation zur Digitalisierung, stellt die plattform n als zukunftsweisendes, wertefundiertes Tool der Hochschultransformation vor und gibt letztlich einen Ausblick, in welche Richtung die Plattform weiterzudenken und weiterzuentwickeln ist.',
    ],
    href: 'https://www.researchgate.net/publication/346082640_Transformation_durch_Digitalisierung_gestalten_Die_plattform_n_als_Vernetzungs-_und_Kollaborationsplattform_fur_nachhaltige_Hochschulen',
    specific: {},
  },
  {
    id: '2',
    title: 'Suffizienz an Hochschulen im ländlichen Raum',
    image: coverSuffizienz,
    abstract: [
      'Suffizienz bedeutet Genügsamkeit, maßvoller Konsum und gut überlegte Ressourcennutzung. Also harter Verzicht? Nein. Vielmehr geht es darum, Verantwortung für die Umweltfolgen des eigenen Handelns zu übernehmen und ein ressourcenschonendes und zugleich erfülltes Leben zu führen. Übersetzt heißt das, Genügsamkeit sowie das “richtige” und “notwendige” Maß des Umweltverbrauchs auf individueller oder organisationaler Ebene anzuvisieren. Konkret weisen folgende Stichwörter auf Suffizienz hin: Reduktion, Substitution und Anpassung des Ressourcenverbrauchs, ebenso wie Eigenproduktion oder gemeinsame, langlebige Nutzung von Gütern – diese Strategien sind überdies unmittelbar mit einem achtsamen, bewussten Umgang mit Mensch und Umwelt verbunden.',
      'Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) wollte ich die Suffizienz als unabdingbare Nachhaltigkeitsstrategie in den Blick nehmen und eine Lücke in der Betrachtung von Nachhaltigkeit an Hochschulen schließen. Gemeinsam mit Luca Markus veröffentlichte ich eine Good Practice-Sammlung, die erstmals und anschaulich zeigt, wie Suffizienz an Hochschulen im ländlichen Raum bereits heute gelebt und erprobt wird.',
      'Die systematisch aufgearbeiteten Ansätze, Projekte und Strukturen gelingender Nachhaltigkeit laden zur Nachahmung ein. Sie bieten Denk- und Handlungsimpulse, wie Suffizienz mit Inhalt, Kreativität und Freude auf individueller und organisationaler Ebene an Hochschulen realisiert werden kann. Dabei werden verschiedene Handlungsfelder an Hochschulen in den Fokus genommen: fleischarme Mensa, Kurzstreckenflugverbot, studentisches Imkern und Gärtnern, suffiziente Forschungs- und Lehrformate, innovative Mobilitätssysteme, Repair Café, Maker Space und vieles mehr.',
      'Für mich fragt allein die Suffizienz nach dem ‚Warum‘ und ‚Ob‘ des Ressourcenverbrauchs und setzt in der Gegenwart beim Handeln eines jeden Individuums und einer jeden Organisation an, anstatt einzig und allein auf technische Innovationen und somit eine hochriskante Wette für zukünftige Generationen zu setzen. Die Botschaft der Sammlung ist: Wagt Neues, werft Ballast ab und setzt vielfältig Suffizienz für eine nachhaltige Entwicklung ein.',
      'Beiträge von renommierten Autor*innen – u.a. apl. Prof. Dr. Niko Paech, Prof. Dr. Angelika Zahrnt – und Nachwuchswissenschaftler*innen, die unterschiedliche Perspektiven auf das Thema Suffizienz einnehmen, ergänzen und rahmen inhaltlich die Good Practices.',
    ],
    href: 'https://www.researchgate.net/publication/342991904_Suffizienz_an_Hochschulen_im_landlichen_Raum',
    specific: {
      title: 'Hinweise auf die Sammlung',
      content: [
        {
          title: '',
          p: '#KAUFNIX Kampagnen-Webseite der Deutschen Umweltstiftung',
          href: 'https://kaufnix.net/suffizienz-an-hochschulen/',
        },
        {
          title: '',
          p: 'Blog Postwachstum des Instituts für ökologische Wirtschaftsforschung',
          href: 'https://www.postwachstum.de/suffizienz-an-hochschulen-im-laendlichen-raum-20200810',
        },
        {
          title: '',
          p: 'Cusanus Hochschule',
          href: 'https://www.cusanus-hochschule.de/aktuelles/nachhaltigkeit-studieren-masterstudiengang-oekonomie-nachhaltigkeit-gesellschaftsgestaltung-ist-teil-der-goodpractice-sammlung-des-netzwe/',
        },
        {
          title: '',
          p: 'Leuphana Universität Lüneburg',
          href: 'https://www.leuphana.de/universitaet/entwicklung/nachhaltigkeit/lebenswelt-universitaet.html?get=params&cHash=59851ea2612dd60b8e015b4652ff9383',
        },
        {
          title: '',
          p: 'HOCH-N-Netzwerk',
          href: 'https://www.hochn.uni-hamburg.de/3-aktuelles/nachrichten/279-good-practice-sammlung-netzwerk-n.html',
        },
        {
          title: '',
          p: 'HIS Institut für Hochschulentwicklung',
          href: 'https://his-he.de/portale/nachhaltige-entwicklung',
        },
        {
          title: '',
          p: 'Umweltmanagement an der BTU Cottbus-Senftenberg',
          href: 'https://www.b-tu.de/unileben/umweltmanagement/aktuelles/meldungen',
        },
        {
          title: '',
          p: 'Wendland im Wandel – Netzwerk für Klimaschutz & Suffizienz',
          href: 'https://www.schoolandcollegelistings.com/DE/L%C3%BCchow/110937906997436/Wendland-im-Wandel---Netzwerk-f%C3%BCr-Klimaschutz-%26-Suffizienz',
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Nachhaltigkeitsnetzwerke an Hochschulen',
    image: coverNachhaltigkeitsnetzwerke,
    abstract: [
      'Netzwerk, Vernetzung und Beziehung sind omnipräsente, aber häufig symbolisch verwendete Begriffe, wenn über die Transformation von Hochschulen in Richtung einer nachhaltigen Entwicklung gesprochen und nachgedacht wird. Wissenschaftliche Betrachtungen aus netzwerkanalytischer Perspektive liegen bislang nicht vor. In einem praxisorientierten Artikel zielte ich darauf ab, in diese Lücke zu stoßen, indem ich die Vernetzung von Mitgliedern von Nachhaltigkeitsinitiativen an Hochschulen offengelegt und somit die Einbettung dieser Gruppen in eine Netzwerkstruktur explorativ erkundet habe. Rahmend habe ich die erhobenen Daten und die daraus abgeleiteten Erkenntnisse mit dem Erfahrungswissen der Formate und Aktivitäten des netzwerk n kontextualisiert. Letztlich ist diese kleine Studie als Plädoyer zu lesen, die transformative Kraft der Beziehungsebene stärker in den Blick zu nehmen und zu aktivieren, um Transformationsprozesse an Hochschulen erklären und gestalten zu können.',
    ],
    href: 'https://www.researchgate.net/publication/331894285_Nachhaltigkeitsnetzwerke_an_Hochschulen_Die_transformative_Kraft_von_Verbindungen',
    specific: {
      title: 'Rahmeninformationen',
      content: [
        {
          title: 'Stichprobe:',
          p: '114 Mitglieder von 18 Nachhaltigkeitsinitiativen aus neun Bundesländern und dem deutschsprachigen Ausland',
          href: '',
        },
        {
          title: 'Einbezogene Hochschultypen:',
          p: 'Universitäten, Technische Universitäten, Fachhochschulen und Privathochschulen',
          href: '',
        },
        {
          title: 'Erhebungszeitraum:',
          p: 'April bis August 2018',
          href: '',
        },
      ],
    },
  },
  {
    id: '4',
    title:
      'Die staatliche Förderung der außerschulischen Bildung für nachhaltige Entwicklung in Deutschland',
    image: coverBNE,
    abstract: [
      '(Un-)bezahlbar, (un-)zählbar?',
      'Im Rahmen des Monitorings des Weltaktionsprogramms Bildung für nachhaltige Entwicklung (WAP BNE) erstellt das Institut Futur der Freien Universität Berlin Studien über die Situation der BNE in Deutschland in den vielfältigen Handlungsbereichen wie frühkindliche Bildung, Schule, berufliche Bildung, Hochschule, non-formales und informelles Lernen/Jugend sowie Kommunen. Für den Nationalen Aktionsplan, der im Juni 2017 von der Nationalen Plattform BNE als Resultat eines breit angelegten, partizipativen Multi-Stakeholder-Prozesses, an dem Bund, Länder, Kommunen, Zivilgesellschaft und Wissenschaft beteiligt waren, verabschiedet wurde, formulierte das Fachforum Non-formales und informelles Lernen/Jugend sieben Handlungsfelder, 30 Ziele und 77 Maßnahmen. Diese Zahlen zeugen von dem breiten potenziell zu bearbeitendem Handlungsspektrum der außerschulischen Bildung, die erheblich schwerer abzustecken ist als die formale Bildung, insbesondere da „das non-formale und informelle Lernen nicht institutionell verfasst und nicht strukturell finanziert“ ist, wie die Expert*innen des Fachforums betonen. Wie bereits die Arbeit dieses Gremiums erkennen ließ, fehlt eine systematische Erfassung der Fördersummen und eine ressortübergreifende Förderkonzeption der außerschulischen BNE in den Bundesländern und in den Bundesministerien. Diese Lücke ist besonders bedenklich vor dem Hintergrund, dass der außerschulische Bildungsbereich eine entscheidende, komplementäre Bedeutung in der Umsetzung von jeglichen Bildungsaktivitäten im Kontext BNE aufweist und mehr als 60% der ausgezeichneten Projekte im Rahmen der UN-Dekade BNE (2005-14) auf sich vereinte.',
      'Der Föderalismus mit seiner vertikalen Kompetenzverteilung mündet auf der Landesebene in vielfältigen, exemplarischen Ansätzen, die einer genaueren Betrachtung bedürfen. Die herausfordernde Seite des föderalen Systems zeigte sich im Erstellungsprozess des Nationalen Aktionsplans im WAP: Der Bund hat einen Multi-Stakeholder-Prozess angestoßen, ohne über die Kompetenzen und den Mitteleinsatz der Länder in den bearbeiteten Themenfeldern verfügen zu können. In diesem Kontext ist unabhängig einer inhaltlichen Übereinstimmung per se mit Widerstand der Bundesländer zu rechnen. Aus diesem Grund enthält die veröffentlichte Version des Nationalen Aktionsplans viele sprachliche, von einigen Expert*innen der Fachforen überwiegend unerwünschte bzw. nicht vorgesehene Abschwächungen und Prüfaufträge, die nicht unbedingt als Zeichen eines ausgeprägten politischen Willens der Bundesländer, BNE in allen Bildungsbereichen strukturell zu verankern, zu deuten sind.',
      'Umso wichtiger erscheint ein nüchterner Blick auf die finanziellen Rahmenbedingungen und die praktizierten Förderinstrumente sowie über die zu bewältigenden Herausforderungen zur Stärkung der außerschulischen BNE in Deutschland. Dies sollte 2017 mein unter Mitwirkung von Mandy Singer-Brodowski verfasster Monitoring-Bericht leisten, der zugleich angesichts struktureller Erfassungshürden als erster heuristischer Aufschlag zu verstehen ist und (noch) nicht dem Anspruch einer systematischen und vollständigen Erfassung gerecht werden kann.',
    ],
    href: 'https://www.researchgate.net/publication/331894285_Nachhaltigkeitsnetzwerke_an_Hochschulen_Die_transformative_Kraft_von_Verbindungen',
    specific: {},
  },
];

const Veroeffentlichungen = () => {
  return (
    <Container>
      {publications.map((pub) => (
        <Publication key={pub.id} pub={pub} />
      ))}
    </Container>
  );
};

export default Veroeffentlichungen;
