import { Link } from 'react-router-dom';
import H1Title from '../components/UI/Titles/H1Title';
import CardOffers from '../components/Angebote/CardOffers';
import Map from '../components/Angebote/Map';
import classes from './Angebote.module.css';

import laptopJPG from '../assets/laptop-javascript-clement-helardot-unsplash-w1920.jpg';
import laptopWEBP from '../assets/webp/laptop-javascript-clement-helardot-unsplash-w1920.webp';
import beratungJPG from '../assets/beratung_michael-flohr_verband-der-schweizer-studierendenschaften.jpg';
import beratungWEBP from '../assets/webp/beratung_michael-flohr_verband-der-schweizer-studierendenschaften.webp';
import buecherregalJPG from '../assets/buecherregal-janko-ferlič-unsplash.jpg';
import buecherregalWEBP from '../assets/webp/buecherregal-janko-ferlič-unsplash.webp';
import moderationJPG from '../assets/moderation_michael-flohr.jpg';
import moderationWEBP from '../assets/webp/moderation_michael-flohr.webp';
import HeadingWrapper from '../components/Layout/HeadingWrapper';
import Container from '../components/Layout/Container';

const offers = [
  {
    id: '1',
    title: 'Web- & App-Entwicklung',
    imageSrc: laptopWEBP,
    imageFallback: laptopJPG,
    description: (
      <>
        Viele Jahre habe ich für Vereine Websites – u.a. auf WordPress-Basis – betreut und Inhalte
        eingepflegt. Durch meine Tätigkeit beim{' '}
        <a href='https://www.netzwerk-n.org/' target='_blank' rel='noreferrer'>
          netzwerk n e.V.
        </a>{' '}
        habe ich an der Entwicklung einer{' '}
        <a href='https://plattform-n.org/' target='_blank' rel='noreferrer'>
          Open Source-Kollaborationsplattform
        </a>{' '}
        für das Nachhaltigkeitsengagement an Hochschulen mitgewirkt. Daraus ergab sich der Impuls,
        stärker in die Programmierung einzusteigen. In einer 15-wöchigen Weiterbildung zum
        "Full-Stack Web & App Developer" an der{' '}
        <a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer'>
          WBS Coding School
        </a>{' '}
        in Berlin habe ich mir das Wissen über einen modernen Tech Stack angeeignet und all die
        Wissensbereiche vertieft, die für die Arbeit als Entwickler grundlegend sind. Hauptberuflich
        bin ich seit 2021 als Webentwickler bei der{' '}
        <a href='https://www.team-neusta.de/' target='_blank' rel='noreferrer'>
          team neusta
        </a>{' '}
        Unternehmensgruppe tätig. Weitere Informationen zu diesem Bereich sind unter{' '}
        <Link to='/webentwicklung'>Webentwicklung</Link> zu finden.
      </>
    ),
    activities: [
      'HTML5, CSS3 und Responsive Web Design',
      'Single Page Applications (SPA) auf Basis von React oder Next.js',
      'Cross-Plattform-App auf Basis von Ionic',
      'Aufsetzen & Gestaltung von Webseiten auf WordPress-Basis mit klimapositivem Hosting',
    ],
    references: [
      'Eis mit Stil - Vegan Ice Cream App',
      'Schule ein Gesicht geben e.V.: Gestaltung und Aufsetzen einer Web-App als Wissensplattform für die Arbeit von Schülervertretungen',
      'Hochschule für nachhaltige Entwicklung Eberswalde, Forschungszentrum Nachhaltigkeit - Transformation - Transfer: Grundinstallation Citizen Science-Projekt "Logbuch der Veränderungen"',
      'netzwerk n e.V.: Betreuung, Konzeption und Gestaltung Online-Plattform für nachhaltige Hochschulentwicklung plattform n',
      'netzwerk n e.V.: Betreuung der Website des netzwerk n',
    ],
  },
  {
    id: '2',
    title: 'Beratung',
    imageSrc: beratungWEBP,
    imageFallback: beratungJPG,
    description:
      'Ein viel genutzter und auch teils entwerteter Begriff. Beratung setzt für mich den Wunsch nach Veränderung voraus. Mein Verständnis der Beratungstätigkeit selbst ist es, einerseits aus einer externen Perspektive heraus, Wissen und Erfahrungen zu vermitteln, um Impulse für Verhaltens- und strukturelle Veränderungen zu setzen. Andererseits geht es darum, ein Reflektionsangebot zu unterbreiten, um gemeinsam mit dem Kunden oder der Kundin Handlungsbereiche, Ziele und Maßnahmen zu identifizieren, um einen möglichen Pfad zur gewünschten Veränderung konkret abzustecken und zu beschreiten.',
    activities: [
      'nachhaltige Hochschulentwicklung',
      'Nachhaltigkeitsstrategien für Organisationen',
      'nachhaltige Digitalisierung',
      'Kulturpolitik, Kulturverbände, Kulturmanagement',
      'Partizipation und Methoden in Aushandlungsprozessen',
      'Zeitmanagement, Arbeitsorganisation für Organisationen (Vereine, Verbände etc.)',
      'Zeitmanagement, Arbeitsorganisation, wissenschaftliches Arbeiten für Einzelpersonen (Studierende, Doktorand*innen, Berufsanfänger*innen etc.) ',
    ],
    references: [
      'Beratung von Nachhaltigkeitsakteuren an Hochschulen (Verbände, Hochschulleitung, Verwaltung, studentische und statusgruppenübergreifende Initiativen)',
      'Beratung Forschungsprojekt "Kulturelle Bildungslandkarten – Visuelle sozialräumliche Netzwerkanalyse kooperativer kultureller Bildung in ländlichen Räumen im Vergleich", Universität Erfurt, Fachbereich Kunst, Prof. Dr. Ulrike Stutz',
      'kulturpolitische Beratung Verband deutscher Musikschulen - Landesverband Thüringen e.V.',
      'Technikberatung Verband Deutscher Verkehrsunternehmen, Landesgruppe Sachsen/Thüringen',
    ],
  },
  {
    id: '3',
    title: 'Forschung',
    imageSrc: buecherregalWEBP,
    imageFallback: buecherregalJPG,
    description: (
      <>
        Durch meine Zeit der{' '}
        <Link to='/veroeffentlichungen/kulturpolitik'>Promotion an der Universität Erfurt</Link>{' '}
        habe ich das Privileg erfahren, intrinisch motiviert einen Forschungsgegenstand über einen
        längeren Zeitraum ergründen, analysieren und verstehen zu dürfen. Zudem vermittelte mir
        dieser Lebensabschnitt, was wissenschaftliches Denken und Arbeiten wirklich bedeutet. Vieles
        davon ist auch außerhalb der Forschung essentiell und bereichernd – egal in welchem
        Tätigkeitsbereich. Inhaltlich befasste ich mich bislang in Studien und praxisnahen Artikeln
        mit Kulturpolitik (Politikfeld-/<Link to='/netzwerke-kulturpolitik'>Netzwerkanalyse</Link>),
        Bildung für nachhaltige Entwicklung (staatliche Förderung), nachhaltige Hochschulentwicklung
        (Netzwerkanalyse, Engagement), Digitalisierung und Suffizienz an Hochschulen im ländlichen
        Raum. Darüber hinaus entwickelte ich innerhalb eines Projektes die Wirkungsmessung des
        netzwerk n basierend auf der{' '}
        <a href='https://www.phineo.org/kursbuch-wirkung' target='_blank' rel='noreferrer'>
          Phineo-Wirkungstreppe
        </a>
        .
      </>
    ),
    activities: [
      'Wirkungsmessung und Evaluation von Veranstaltungen, Projekten und Prozessen',
      'quantitative und qualitative Netzwerkanalyse',
    ],
    references: [
      'Studie über die Kulturpolitik in Thüringen',
      'Studie über Nachhaltigkeitsnetzwerke an Hochschulen',
      'Studie über die staatliche Förderung der außerschulischen Bildung für nachhaltige Entwicklung in Deutschland',
      'Studie zum Entwicklungsstand und Perspektiven der außerschulischen Bildung für nachhaltige Entwicklung und Umweltbildung in Thüringen',
    ],
  },
  {
    id: '4',
    title: 'Moderation & Vorträge',
    imageSrc: moderationWEBP,
    imageFallback: moderationJPG,
    description: (
      <>
        Ich hatte das Glück, ausgehend aus meinem ehrenamtlichen Engagement und später beruflich
        beim{' '}
        <a href='https://www.netzwerk-n.org/' target='_blank' rel='noreferrer'>
          netzwerk n e.V.
        </a>{' '}
        mich als Moderator und Referent ausgiebig auszuprobieren. Dank der von mir 2016 initiierten,
        konzipierten und auch überwiegend moderierten Diskussionsreihe{' '}
        <a
          href='https://www.netzwerk-n.org/angebote/formate/perspektive-n/'
          target='_blank'
          rel='noreferrer'
        >
          perspektive n
        </a>{' '}
        hatte ich die Freude, intensive Erfahrungen als Moderator zu sammeln. Dabei war stets mein
        Ziel, heterogene Statusgruppen und Entscheidungsträger durch partizipative und aktivierende
        Methoden in einen Austausch auf Augenhöhe zu bringen. Vieles davon kann ich nun auch auf
        andere Kontexte übertragen. Eine besondere Ehre war es mir, dass die perspektive n vom Rat
        für Nachhaltige Entwicklung als "Projekt Nachhaltigkeit 2018" und "Transformationsprojekt
        2018" ausgezeichnet wurde.
      </>
    ),
    activities: [
      'Moderation von öffentlichen Veranstaltungen wie Diskussionsformaten, Workshops, Tagungen, Konferenzen ...',
      'Moderation von internen Veranstaltungen wie Strategieentwicklungen, Entscheidungsprozessen, Multi-Stakeholder-Gesprächen',
      'Vorträge u.a. zu Nachhaltigkeit, Klimaschutz, nachhaltiger Digitalisierung, nachhaltige Hochschulentwicklung, Kulturpolitik, Selbst- und Zeitmanagement ...',
      'Workshops zum Thema Moderation und Sprechen',
    ],
    references: [
      'Initiierung, Konzeption und Moderation der Diskussionsreihe perspektive n, die sich der nachhaltigen Entwicklung von Hochschulen widmet - ausgezeichnet vom Rat für Nachhaltige Entwicklung als "Projekt Nachhaltigkeit 2018" und "Transformationsprojekt 2018"',
      'diverse Hochschulen, Universitäten und Nachhaltigkeitsnetzwerke in Deutschland',
      'Vorträge auf wissenschaftlichen Tagungen u.a. der Deutschen Vereinigung für Politikwissenschaft, der Deutschen Gesellschaft für Soziologie Sektion Soziologische Netzwerkforschung sowie der Schader Stiftung',
    ],
  },
];

const Angebote = () => {
  return (
    <>
      <HeadingWrapper>
        <section className={classes.description}>
          <H1Title>Angebote</H1Title>
          <p>
            In der Vergangenheit war ich beruflich, freiberuflich und im ehrenamtlichen Kontext
            bereits in den verschiedensten Aufgabenbereichen tätig. Die untere Übersicht gibt einen
            guten Einblick. Seitdem ich 2021 meinen hauptberuflichen Fokus auf die Web- und
            App-Entwicklung gelegt habe, möchte ich auch freiberuflich stärker in diesem Bereich
            arbeiten. Gleichwohl freue ich mich auch weiterhin über Anfragen aus den anderen
            Tätigkeitsfeldern wie <i>Beratung</i> und <i>Moderation & Vorträge</i>. In der Forschung
            bin ich aktuell nicht mehr aktiv.
          </p>
        </section>
      </HeadingWrapper>
      <Container className={classes['container-customized']}>
        <div className={classes['container-offers']}>
          {offers.map((offer) => (
            <CardOffers key={offer.id} offer={offer} />
          ))}
          <Map />
        </div>
      </Container>
    </>
  );
};

export default Angebote;
