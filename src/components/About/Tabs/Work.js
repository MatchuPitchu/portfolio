import AnimatingItem from '../../UI/CSSTransition/AnimatingItem';
import StationPoint from '../../UI/StationPoint/StationPoint';
import classes from './Tabs.module.css';

const workExperience = [
  {
    date: 'seit Oktober 2021',
    title: 'Webentwickler',
    organization: 'team neusta GmbH, Berlin',
    content: `Web- und App-Frontend-Entwicklung auf Basis von HTML, CSS, JavaScript, React, Next.js`,
  },
  {
    date: 'Februar 2017 - Dezember 2020',
    title: 'Projektleitung und -koordination',
    organization: 'netzwerk n e.V., Berlin',
    content: `Projektkoordination "Zukunftsfähige Hochschulen gestalten“ (2017-18, BMBF-Förderung) und "Zukunftsfähige Hochschulen – Denken. Handeln. Wandeln." (2019-20, BMBF-Förderung) sowie Projektleiter "Suffizienz an Hochschulen im ländlichen Raum" (2019-20, EU-Förderung); u.a. Initiierung und Koordination Veranstaltungsreihe perspektive n; Entwicklung Online-Plattform plattform n und technische Infrastruktur; Herausgeberschaft Good Practice-Sammlung; Veröffentlichungen Netzwerkforschung,
    Digitalisierung, nachhaltige Hochschule; Konzeption und Umsetzung Wirkungsmessung `,
  },
  {
    date: 'Juni 2013 - September 2014',
    title: 'Leitung Projektmanagement',
    organization: 'Verband deutscher Musikschulen Thüringen, Erfurt',
    content: `Politikberatung, Begabtenförderung, ÖA, Veranstaltungsorganisation`,
  },
  {
    date: 'November 2012 - Dezember 2014',
    title: 'Geschäftsführung',
    organization: 'Pro Gallica und Russica e.V., Weimar',
    content: `Buchrestaurierung Klassik Stiftung Weimar/Herzogin Anna Amalia Bibliothek, Fundraising, Öffentlichkeitsarbeit für Bücher französischer Provenienz`,
  },
  {
    date: 'seit November 2011',
    title: 'freiberufliche Tätigkeiten',
    organization: '',
    content: `wissenschaftliche Studien, Wissenschaftsberatung, Vorträge, Moderation,
    Webgestaltung, Übersetzung Deutsch / Französisch, Dokumentation`,
  },
  {
    date: 'September 2010 - Juli 2011',
    title: 'Büroleitung',
    organization:
      'Europäisches Parlament Straßburg, Elmar Brok (MdEP), Vorsitzender Ausschuss für Auswärtige Angelegenheiten',
    content: `Koordination, Sitzungsvorbereitung, Betreuung Besuchergruppen, PR`,
  },
];

const WorkExperience = ({ isOpen }) => {
  return (
    <AnimatingItem show={isOpen}>
      <div className={classes['cv-box']}>
        {workExperience.map((item, index) => (
          <StationPoint key={index} item={item} className={`${classes['cv-box__item']}`} />
        ))}
      </div>
    </AnimatingItem>
  );
};

export default WorkExperience;
