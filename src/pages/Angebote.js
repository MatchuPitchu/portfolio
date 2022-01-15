import H1Title from '../components/UI/Titles/H1Title';
import CardOffers from '../components/Angebote/CardOffers';
import Map from '../components/Angebote/Map';
import Container from '../components/Layout/Container';
import classes from './Angebote.module.css';

import laptopJPG from '../assets/laptop-javascript-clement-helardot-unsplash.jpg';
import laptopWEBP from '../assets/webp/laptop-javascript-clement-helardot-unsplash.webp';
import beratungJPG from '../assets/beratung_michael-flohr_verband-der-schweizer-studierendenschaften.jpg';
import beratungWEBP from '../assets/webp/beratung_michael-flohr_verband-der-schweizer-studierendenschaften.webp';
import buecherregalJPG from '../assets/buecherregal-janko-ferlič-unsplash.jpg';
import buecherregalWEBP from '../assets/webp/buecherregal-janko-ferlič-unsplash.webp';
import moderationJPG from '../assets/moderation_michael-flohr.jpg';
import moderationWEBP from '../assets/webp/moderation_michael-flohr.webp';

const offers = [
  {
    id: '1',
    title: 'Web- & App-Entwicklung',
    imageSrc: laptopWEBP,
    imageFallback: laptopJPG,
    description:
      'Viele Jahre habe ich für Vereine Websites - u.a. auf WordPress-Basis - betreut und Inhalte eingepflegt. Durch meine Tätigkeit beim netzwerk n e.V. have ich intensiv an der Entwicklung einer Open Source-Kollaborationsplattform mitgewirkt. Daraus ergab sich der Impuls, sich stärker mit der Programmierseite zu beschäftigen. In einer 15-wöchigen Weiterbildung zum Full-Stack Web & App Developer an der WBS Coding School in Berlin habe ich mir das Wissen über einen modernen Tech Stack angeeignet und all die Wissensbereiche vertieft, die für die Arbeit als Entwickler grundlegend sind. Hauptberuflich bin ich mittlerweile als Webentwickler bei der team neusta Unternehmensgruppe tätig.',
    activities: [
      'App & Web Development',
      'HTML5, CSS3 und Responsive Web Design',
      'Aufsetzen & Gestaltung von Webseiten auf WordPress-Basis mit kllimapositivem Hosting',
      'Frontend Programmierung mit JavaScript, TypeScript, React, Ionic',
      'Backend Programmierung mit Node.js (Express)',
      'Version Control Systems (Git & GitHub)',
      'Datenbanken und Datenbanken-Management: SQL, MongoDB',
      'DevOps: Hosting, Deployment, Monitoring',
      'APIs (REST)',
      'Software Testing (TDD)',
      'User Interface & User Experience',
      'Agile Tools und Methoden (z.B. Scrum)',
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
      'Ein viel genutzter und auch teils entwerteter Begriff. Beratung setzt für mich den Wunsch nach Veränderung voraus. Mein Verständnis der Beratungstätigkeit selbst ist es, einerseits aus einer externen Perspektive heraus, Wissen und Erfahrungen zu vermitteln, um Impulse für Verhaltens- und strukturelle Veränderungen zu setzen. Andererseits geht es darum, ein Reflektionsangebot zu machen, um gemeinsam mit dem Kunden Handlungsbereiche, Ziele und Maßnahmen zu identifizieren, um einen möglichen Pfad zur gewünschten Veränderung konkret abzustecken.',
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
    description:
      'Durch meine Zeit der Promotion an der Universität Erfurt habe ich das Privileg erfahren, intrinisch motiviert ein Forschungsfeld über einen längeren Zeitraum zu ergründen, zu analysieren und zu verstehen. Zudem vermittelte mir diese Zeit, was wissenschaftliches Denken und Arbeiten eigentlich konkret bedeutet. Vieles davon ist auch außerhalb der Forschung essentiell und bereichernd – egal in welchem Tätigkeitsbereich.',
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
    description:
      'Ich hatte das Glück, ausgehend aus meinem ehrenamtlichen Engagement und später beruflich beim netzwerk n e.V. mich als Moderator und Referent ausgiebig auszuprobieren. Dank der von mir 2016 initiierten, konzipierten und auch überwiegend moderierten Diskussionsreihe perspektive n hatte ich die Freude, intensive Erfahrungen als Moderator zu sammeln, der heterogene Statusgruppen und Entscheidungsträger durch partizipative und aktivierende Methoden in einen Austausch auf Augenhöhe bringt. Vieles davon kann ich nun auch auf andere Kontexte übertragen.',
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
    <Container className={classes['container-customized']}>
      <div className={classes.description}>
        <H1Title classTitle={classes.title}>Angebote</H1Title>
        <p>
          In der Vergangenheit war ich beruflich, freiberuflich und im ehrenamtlichen Kontext
          bereits in den verschiedensten Aufgabenbereichen tätig. Die untere Übersicht gibt einen
          guten Einblick. Seitdem ich 2021 meinen hauptberuflichen Fokus auf die Web- und
          App-Entwicklung gelegt habe, möchte ich auch freiberuflich stärker in diesem Bereich
          arbeiten. Gleichwohl freue ich mich auch weiterhin über Anfragen aus den anderen
          Tätigkeitsfeldern wie <i>Beratung</i> und <i>Moderation & Vorträge</i>. In der Forschung
          bin ich aktuell nicht mehr aktiv.
        </p>
      </div>
      <div className={classes['container-offers']}>
        {offers.map((offer) => (
          <CardOffers key={offer.id} offer={offer} />
        ))}
        <Map />
      </div>
    </Container>
  );
};

export default Angebote;
