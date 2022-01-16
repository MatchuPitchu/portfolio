import Container from '../Layout/Container';
import ButtonsPublicationDetails from '../UI/Button/ButtonsPublicationDetails';
import Section from '../UI/Section/Section';
import List from '../UI/List/List';
import KeyPoint from '../SVG/KeyPoint';
import classes from './PublicationsDetails.module.css';

const data = [
  {
    id: '1',
    p: '#KAUFNIX Kampagnen-Webseite der Deutschen Umweltstiftung',
    href: 'https://kaufnix.net/suffizienz-an-hochschulen/',
  },
  {
    id: '2',
    p: 'Blog Postwachstum des Instituts für ökologische Wirtschaftsforschung',
    href: 'https://www.postwachstum.de/suffizienz-an-hochschulen-im-laendlichen-raum-20200810',
  },
  {
    id: '3',
    p: 'Cusanus Hochschule',
    href: 'https://www.cusanus-hochschule.de/aktuelles/nachhaltigkeit-studieren-masterstudiengang-oekonomie-nachhaltigkeit-gesellschaftsgestaltung-ist-teil-der-goodpractice-sammlung-des-netzwe/',
  },
  {
    id: '4',
    p: 'Leuphana Universität Lüneburg',
    href: 'https://www.leuphana.de/universitaet/entwicklung/nachhaltigkeit/lebenswelt-universitaet.html?get=params&cHash=59851ea2612dd60b8e015b4652ff9383',
  },
  {
    id: '5',
    p: 'HOCH-N-Netzwerk',
    href: 'https://www.hochn.uni-hamburg.de/3-aktuelles/nachrichten/279-good-practice-sammlung-netzwerk-n.html',
  },
  {
    id: '6',
    p: 'HIS Institut für Hochschulentwicklung',
    href: 'https://his-he.de/portale/nachhaltige-entwicklung',
  },
  {
    id: '7',
    p: 'Umweltmanagement an der BTU Cottbus-Senftenberg',
    href: 'https://www.b-tu.de/unileben/umweltmanagement/aktuelles/meldungen',
  },
  {
    id: '8',
    p: 'Wendland im Wandel – Netzwerk für Klimaschutz & Suffizienz',
    href: 'https://www.schoolandcollegelistings.com/DE/L%C3%BCchow/110937906997436/Wendland-im-Wandel---Netzwerk-f%C3%BCr-Klimaschutz-%26-Suffizienz',
  },
];

const SuffizienzDetails = () => {
  return (
    <Container className={classes['container-customized']}>
      <ButtonsPublicationDetails
        text='Download'
        href='https://www.researchgate.net/publication/342991904_Suffizienz_an_Hochschulen_im_landlichen_Raum'
      />
      <Section className={classes.row}>
        <div className={classes['col-left']}>
          <h1>Suffizienz an Hochschulen im ländlichen Raum</h1>
        </div>
        <div className={classes['col-right']}>
          <h2>Die vernachlässigte Strategie für eine nachhaltigere Gesellschaft</h2>
          <p>
            Suffizienz bedeutet Genügsamkeit, maßvoller Konsum und gut überlegte Ressourcennutzung.
            Also harter Verzicht? Nein. Vielmehr geht es darum, Verantwortung für die Umweltfolgen
            des eigenen Handelns zu übernehmen und ein ressourcenschonendes und zugleich erfülltes
            Leben zu führen. Übersetzt heißt das, Genügsamkeit sowie das “richtige” und “notwendige”
            Maß des Umweltverbrauchs auf individueller oder organisationaler Ebene anzuvisieren.
            Konkret weisen folgende Stichwörter auf Suffizienz hin: Reduktion, Substitution und
            Anpassung des Ressourcenverbrauchs, ebenso wie Eigenproduktion oder gemeinsame,
            langlebige Nutzung von Gütern – diese Strategien sind überdies unmittelbar mit einem
            achtsamen, bewussten Umgang mit Mensch und Umwelt verbunden.
          </p>
          <p>
            Bislang steht die Nachhaltigkeitsstrategie der Suffizienz politisch, wirtschaftlich und
            gesellschaftlich im übermächtigen Schatten der Effizienz. Im Rahmen des von der
            Europäischen Union in der NOPLANETB-Initiative geförderten Projekts “Suffiziente
            Hochschulen im ländlichen Raum” (Oktober 2019 bis August 2020) wollte ich die Suffizienz
            als unabdingbare Nachhaltigkeitsstrategie in den Blick nehmen und eine Lücke in der
            Betrachtung von Nachhaltigkeit an Hochschulen schließen. Gemeinsam mit Luca Markus
            veröffentlichte ich eine Good Practice-Sammlung, die erstmals und anschaulich zeigt, wie
            Suffizienz an Hochschulen im ländlichen Raum bereits heute gelebt und erprobt wird.
          </p>
          <p>
            Die systematisch aufgearbeiteten Ansätze, Projekte und Strukturen gelingender
            Nachhaltigkeit laden zur Nachahmung ein. Sie bieten Denk- und Handlungsimpulse, wie
            Suffizienz mit Inhalt, Kreativität und Freude auf individueller und organisationaler
            Ebene an Hochschulen realisiert werden kann. Dabei werden verschiedene Handlungsfelder
            an Hochschulen in den Fokus genommen: fleischarme Mensa, Kurzstreckenflugverbot,
            studentisches Imkern und Gärtnern, suffiziente Forschungs- und Lehrformate, innovative
            Mobilitätssysteme, Repair Café, Maker Space und vieles mehr.
          </p>
          <p>
            Für mich fragt allein die Suffizienz nach dem ‚Warum‘ und ‚Ob‘ des Ressourcenverbrauchs
            und setzt in der Gegenwart beim Handeln eines jeden Individuums und einer jeden
            Organisation an, anstatt einzig und allein auf technische Innovationen und somit eine
            hochriskante Wette für zukünftige Generationen zu setzen. Die Botschaft der Sammlung
            ist: Wagt Neues, werft Ballast ab und setzt vielfältig Suffizienz für eine nachhaltige
            Entwicklung ein.
          </p>
          <p>
            Für mich fragt allein die Suffizienz nach dem ‚Warum‘ und ‚Ob‘ des Ressourcenverbrauchs
            und setzt in der Gegenwart beim Handeln eines jeden Individuums und einer jeden
            Organisation an, anstatt einzig und allein auf technische Innovationen und somit eine
            hochriskante Wette für zukünftige Generationen zu setzen. Die Botschaft der Sammlung
            ist: Wagt Neues, werft Ballast ab und setzt vielfältig Suffizienz für eine nachhaltige
            Entwicklung ein.
          </p>
          <img
            src='https://vg02.met.vgwort.de/na/85881e3927744f7c8655a0f3ba09b673'
            width='1'
            height='1'
            alt='Zählmarke VG Wort'
          />
        </div>
      </Section>
      <Section>
        <div className={classes['col-left']}>
          <h3>Hinweise auf die Sammlung</h3>
        </div>
        <div className={classes['col-right']}>
          <List>
            {data?.map((item) => (
              <li key={item.id} className={classes['li-customize']}>
                <KeyPoint className={classes['keypoint-customize']} />
                <p className={classes.text}>
                  <a href={item.href} target='_blank' rel='noreferrer'>
                    {item.p}{' '}
                  </a>
                </p>
              </li>
            ))}
          </List>
        </div>
      </Section>
    </Container>
  );
};

export default SuffizienzDetails;
