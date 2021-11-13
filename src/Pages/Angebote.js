import CardOffers from '../components/CardOffers';
import classes from './Angebote.module.css';

import laptop from '../assets/laptop-javascript-clement-helardot-unsplash.jpg';
import beratung from '../assets/beratung_michael-flohr_verband-der-schweizer-studierendenschaften.jpg';
import moderation from '../assets/moderation_michael-flohr.jpg';
import buecherregal from '../assets/buecherregal-janko-ferlič-unsplash.jpg';
import IframeMap from '../components/IframeMap';

const offers = [
  {
    id: '1',
    title: 'Web- & App-Entwicklung',
    image: laptop,
    activities: [
      'App & Web Development',
      'Aufsetzen & Gestaltung von Webseiten auf WordPress-Basis mit kllimapositivem Hosting',
      'HTML5, CSS3 und Responsive Web Design',
      'Frontend Programmierung mit Vanilla JavaScript/ReactJS/Ionic',
      'Backend Programmierung mit Node.js (Express)',
      'Version Control Systems (Git & GitHub)',
      'Databases und databases management: SQL, MongoDB',
      'APIs (REST)',
      'DevOps: Hosting, Deployment, Monitoring',
      'Software Testing (TDD)',
      'User Interface & User Experience',
      'Agile Tools und Methoden (z.B. Scrum)',
    ],
    references: [
      'Grundinstallation Citizen Science-Projekt "Logbuch der Veränderungen" der Hochschule für nachhaltige Entwicklung Eberswalde, Forschungszentrum Nachhaltigkeit - Transformation - Transfer',
      'Betreuung, Konzeption und Gestaltung Online-Plattform für nachhaltige Hochschulentwicklung plattform n',
      'Grundstruktur und Mitbetreuung Webseite netzwerk n',
    ],
  },
  {
    id: '2',
    title: 'Beratung',
    image: beratung,
    activities: [
      'Nachhaltige Hochschulentwicklung',
      'Nachhaltigkeitsstrategien für Organisationen',
      'Nachhaltige Digitalisierung',
      'Kulturpolitik, Kulturverbände, Kulturmanagement',
      'Partizipation und Methoden in Aushandlungsprozessen',
      'Zeitmanagement, Arbeitsorganisation für Organisationen wie Vereine, Verbände ...',
      'Zeitmanagement, Arbeitsorganisation, wissenschaftliches Arbeiten für Einzelpersonen wie Studierende, Doktorand*innen, Berufsanfänger*innen ... ',
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
    title: 'Moderation & Vorträge',
    image: moderation,
    activities: [
      'Moderation von öffentlichen Veranstaltungen wie Diskussionsformaten, Workshops, Tagungen, Konferenzen ...',
      'Moderation von internen Veranstaltungen wie Strategieentwicklungen, Entscheidungsprozessen, Multi-Stakeholder-Gesprächen',
      'Workshops zum Thema Moderation und Sprechen',
      'Vorträge u.a. zu Nachhaltigkeit, Klimaschutz, nachhaltiger Digitalisierung, nachhaltige Hochschulentwicklung, Kulturpolitik, Selbst- und Zeitmanagement ...',
    ],
    references: [''],
  },
  {
    id: '4',
    title: 'Forschung',
    image: buecherregal,
    activities: [
      'Wirkungsmessung und Evaluation von Veranstaltungen, Projekten und Entscheidungsprozessen',
      'quantitative und qualitative Netzwerkanalyse',
    ],
    references: [
      'Studie über die Kulturpolitik in Thüringen',
      'Studie über Nachhaltigkeitsnetzwerke an Hochschulen',
      'Studie über die staatliche Förderung der außerschulischen Bildung für nachhaltige Entwicklung in Deutschland',
      'Studie zum Entwicklungsstand und Perspektiven der außerschulischen Bildung für nachhaltige Entwicklung und Umweltbildung in Thüringen',
    ],
  },
];

const Angebote = () => {
  return (
    <div className={classes.center}>
      <div className={classes.container}>
        {offers.map((offer) => (
          <CardOffers key={offer.id} offer={offer} />
        ))}
        <IframeMap />
      </div>
    </div>
  );
};

export default Angebote;
