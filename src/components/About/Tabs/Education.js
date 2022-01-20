import AnimatingItem from '../../UI/CSSTransition/AnimatingItem';
import StationPoint from '../../UI/StationPoint/StationPoint';
import classes from './Tabs.module.css';

const education = [
  {
    date: 'Januar 2021 - Mai 2021',
    title: 'Full-Stack Web- & App-Entwicklung',
    organization: 'WBS Coding School Berlin',
    content: `Planung, Umsetzung komplexer Web-Applikationen (selbständig, im Team); HTML5, CSS3, responsives Web-Design, Vanilla JavaScript, ReactJS, Ionic; Node.js (Express), Git & GitHub, Databanken (SQL, MongoDB), APIs (REST), DevOps (Hosting, Deployment, Monitoring), Software Testing (TDD), UX/UI; Agile Tools und Methoden (Scrum)`,
  },
  {
    date: 'Januar 2021 - Mai 2021',
    title: 'Promotion zum Dr. rer. pol',
    organization: 'Universität Erfurt, Lehrstuhl für Politische Bildung, Prof. Dr. Andreas Anter',
    content: `Dissertation "Kulturpolitik in Thüringen. Praktiken – Governance – Netzwerke" (transcript Verlag, Open Access)`,
  },
  {
    date: 'September 2010 - Juni 2011',
    title: `Certificat d'Études Politiques Européennes`,
    organization: `Institut d'Études Politiques de Strasbourg`,
    content: `Politikwissenschaft, Kulturwissenschaften`,
  },
  {
    date: 'Oktober 2009 - September 2012',
    title: `Master of Arts`,
    organization: `Hochschule für Musik Franz Liszt Weimar, Friedrich-Schiller-Universität Jena`,
    content: `Kulturmanagement, Interkulturelle Wirtschaftskommunikation`,
  },
  {
    date: 'September 2008 - Februar 2009',
    title: `ERASMUS-Studium`,
    organization: `Université des Antilles et de la Guyane`,
    content: `Politikwissenschaft, Wirtschaftswissenschaften`,
  },
  {
    date: 'Oktober 2005 - August 2009',
    title: `Bachelor of Arts`,
    organization: `Universität Erfurt`,
    content: `Politikwissenschaft, Wirtschaftswissenschaften, Soziologie, Musikerziehung`,
  },
];

const Education = ({ isOpen }) => {
  return (
    <AnimatingItem show={isOpen}>
      <div className={classes['cv-box']}>
        {education.map((item, index) => (
          <StationPoint key={index} item={item} className={classes['cv-box__item']} />
        ))}
      </div>
    </AnimatingItem>
  );
};

export default Education;
