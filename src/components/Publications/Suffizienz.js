import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Publications.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import List from '../UI/List';
import KeyPoint from '../SVG/KeyPoint';

import coverSuffizienz from '../../assets/Cover Flohr & Markus 2020 Suffizienz an Hochschulen im ländlichen Raum.png';

const pub = {
  abstract: [
    'Suffizienz bedeutet Genügsamkeit, maßvoller Konsum und gut überlegte Ressourcennutzung. Also harter Verzicht? Nein. Vielmehr geht es darum, Verantwortung für die Umweltfolgen des eigenen Handelns zu übernehmen und ein ressourcenschonendes und zugleich erfülltes Leben zu führen. Übersetzt heißt das, Genügsamkeit sowie das “richtige” und “notwendige” Maß des Umweltverbrauchs auf individueller oder organisationaler Ebene anzuvisieren. Konkret weisen folgende Stichwörter auf Suffizienz hin: Reduktion, Substitution und Anpassung des Ressourcenverbrauchs, ebenso wie Eigenproduktion oder gemeinsame, langlebige Nutzung von Gütern – diese Strategien sind überdies unmittelbar mit einem achtsamen, bewussten Umgang mit Mensch und Umwelt verbunden.',
    'Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) wollte ich die Suffizienz als unabdingbare Nachhaltigkeitsstrategie in den Blick nehmen und eine Lücke in der Betrachtung von Nachhaltigkeit an Hochschulen schließen. Gemeinsam mit Luca Markus veröffentlichte ich eine Good Practice-Sammlung, die erstmals und anschaulich zeigt, wie Suffizienz an Hochschulen im ländlichen Raum bereits heute gelebt und erprobt wird.',
    'Die systematisch aufgearbeiteten Ansätze, Projekte und Strukturen gelingender Nachhaltigkeit laden zur Nachahmung ein. Sie bieten Denk- und Handlungsimpulse, wie Suffizienz mit Inhalt, Kreativität und Freude auf individueller und organisationaler Ebene an Hochschulen realisiert werden kann. Dabei werden verschiedene Handlungsfelder an Hochschulen in den Fokus genommen: fleischarme Mensa, Kurzstreckenflugverbot, studentisches Imkern und Gärtnern, suffiziente Forschungs- und Lehrformate, innovative Mobilitätssysteme, Repair Café, Maker Space und vieles mehr.',
    'Für mich fragt allein die Suffizienz nach dem ‚Warum‘ und ‚Ob‘ des Ressourcenverbrauchs und setzt in der Gegenwart beim Handeln eines jeden Individuums und einer jeden Organisation an, anstatt einzig und allein auf technische Innovationen und somit eine hochriskante Wette für zukünftige Generationen zu setzen. Die Botschaft der Sammlung ist: Wagt Neues, werft Ballast ab und setzt vielfältig Suffizienz für eine nachhaltige Entwicklung ein.',
    'Beiträge von renommierten Autor*innen – u.a. apl. Prof. Dr. Niko Paech, Prof. Dr. Angelika Zahrnt – und Nachwuchswissenschaftler*innen, die unterschiedliche Perspektiven auf das Thema Suffizienz einnehmen, ergänzen und rahmen inhaltlich die Good Practices.',
  ],
  specific: {
    title: 'Hinweise auf die Sammlung',
    content: [
      {
        id: '1',
        title: '',
        p: '#KAUFNIX Kampagnen-Webseite der Deutschen Umweltstiftung',
        href: 'https://kaufnix.net/suffizienz-an-hochschulen/',
      },
      {
        id: '2',
        title: '',
        p: 'Blog Postwachstum des Instituts für ökologische Wirtschaftsforschung',
        href: 'https://www.postwachstum.de/suffizienz-an-hochschulen-im-laendlichen-raum-20200810',
      },
      {
        id: '3',
        title: '',
        p: 'Cusanus Hochschule',
        href: 'https://www.cusanus-hochschule.de/aktuelles/nachhaltigkeit-studieren-masterstudiengang-oekonomie-nachhaltigkeit-gesellschaftsgestaltung-ist-teil-der-goodpractice-sammlung-des-netzwe/',
      },
      {
        id: '4',
        title: '',
        p: 'Leuphana Universität Lüneburg',
        href: 'https://www.leuphana.de/universitaet/entwicklung/nachhaltigkeit/lebenswelt-universitaet.html?get=params&cHash=59851ea2612dd60b8e015b4652ff9383',
      },
      {
        id: '5',
        title: '',
        p: 'HOCH-N-Netzwerk',
        href: 'https://www.hochn.uni-hamburg.de/3-aktuelles/nachrichten/279-good-practice-sammlung-netzwerk-n.html',
      },
      {
        id: '6',
        title: '',
        p: 'HIS Institut für Hochschulentwicklung',
        href: 'https://his-he.de/portale/nachhaltige-entwicklung',
      },
      {
        id: '7',
        title: '',
        p: 'Umweltmanagement an der BTU Cottbus-Senftenberg',
        href: 'https://www.b-tu.de/unileben/umweltmanagement/aktuelles/meldungen',
      },
      {
        id: '8',
        title: '',
        p: 'Wendland im Wandel – Netzwerk für Klimaschutz & Suffizienz',
        href: 'https://www.schoolandcollegelistings.com/DE/L%C3%BCchow/110937906997436/Wendland-im-Wandel---Netzwerk-f%C3%BCr-Klimaschutz-%26-Suffizienz',
      },
    ],
  },
};

const tags = [
  'Suffizienz',
  'Effizienz',
  'Konsistenz',
  'Hochschule',
  'Nachhaltigkeit',
  'Ländlicher Raum',
  'Good Practices',
];

const Suffizienz = () => {
  return (
    <Card className={classes['card-customize']}>
      <div className={classes.cover}>
        <img src={coverSuffizienz} alt='Suffizienz an Hochschulen im ländlichen Raum' />
      </div>
      <div className={classes.content}>
        <h2>Suffizienz an Hochschulen im ländlichen Raum</h2>
        <div className={classes.description}>
          <p>
            Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und
            gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der
            Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente
            Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) nahm ich die Suffizienz
            als unabdingbare Nachhaltigkeitsstrategie in den Blick.
          </p>
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={classes.buttons}>
          <div>
            <a
              href='https://www.researchgate.net/publication/342991904_Suffizienz_an_Hochschulen_im_landlichen_Raum'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Ansicht</Button>
            </a>
          </div>
          <div>
            <Button>Mehr lesen</Button>
          </div>
        </div>
      </div>

      {/* <div className={classes.sideCol}>
        {pub.specific && (
          <div>
            <h3>{pub.specific.title}</h3>
            <List>
              {pub?.specific?.content?.map((item) => (
                <li key={item.id}>
                  <KeyPoint />
                  <div className={classes.text}>
                    <span>{item.title}</span>
                    {item.p}
                  </div>
                  {item.href && (
                    <a className={classes.link} href={item.href} target='_blank' rel='noreferrer'>
                      <Icon className={classes.icon} icon={['fa', 'external-link-alt']} />
                    </a>
                  )}
                </li>
              ))}
            </List>
          </div>
        )}
      </div> */}
    </Card>
  );
};

export default Suffizienz;
