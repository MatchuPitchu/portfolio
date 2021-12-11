import classes from './Kompetenzen.module.css';

import html5 from '../../assets/logos/logo-HTML5.svg';
import css3 from '../../assets/logos/logo-CSS3.svg';
import javascript from '../../assets/logos/logo-javascript.svg';
import typescript from '../../assets/logos/logo-typescript.svg';
import nodejs from '../../assets/logos/logo-nodejs.svg';
import postgresql from '../../assets/logos/logo-postgresql.svg';
import mongodb from '../../assets/logos/logo-mongodb.svg';
import wordpress from '../../assets/logos/logo-wordpress.svg';
import git from '../../assets/logos/logo-git.svg';
import github from '../../assets/logos/logo-github.svg';
import indesign from '../../assets/logos/logo-adobe-indesign.svg';
import illustrator from '../../assets/logos/logo-adobe-illustrator.svg';
import photoshop from '../../assets/logos/logo-adobe-photoshop.svg';

import react from '../../assets/logos/logo-reactjs.svg';
import ionic from '../../assets/logos/logo-ionic.svg';
import expressjs from '../../assets/logos/logo-expressjs.svg';
import bootstrap from '../../assets/logos/logo-bootstrap-5.svg';

const webSkills = [
  {
    title: 'Web- & App-Entwicklung',
    tags: [
      { name: 'HTML5', logo: html5 },
      { name: 'CSS3', logo: css3 },
      { name: 'JavaScript', logo: javascript },
      { name: 'TypeScript', logo: typescript },
      { name: 'Node.js', logo: nodejs },
      { name: 'SQL', logo: postgresql },
      { name: 'MongoDB', logo: mongodb },
      { name: 'WordPress', logo: wordpress },
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'InDesign', logo: indesign },
      { name: 'Illustrator', logo: illustrator },
      { name: 'Photoshop', logo: photoshop },
    ],
  },
  {
    title: 'Libraries und Frameworks',
    tags: [
      { name: 'React', logo: react },
      { name: 'Ionic', logo: ionic },
      { name: 'Express.js', logo: expressjs },
      { name: 'Bootstrap', logo: bootstrap },
    ],
  },
];

const tags = [
  {
    title: 'Themen',
    tags: [
      'Web- & App-Entwicklung',
      'Digitalisierung',
      'Nachhaltige Entwicklung',
      'Nachhaltige Hochschulentwicklung',
      'Politikwissenschaft',
      'Kulturpolitik',
      'Kulturmanagement',
      'Musikwissenschaft',
      'Soziologie',
      'Wirtschaftswissenschaften',
      'Interkulturelle Wirtschaftskommunikation',
    ],
  },
  {
    title: 'Projektmanagement',
    tags: [
      'agiles Arbeiten',
      'wissenschaftliches Arbeiten',
      'Beratung',
      'Organisationsentwicklung',
      'Zeitplanung',
      'Moderation',
      'Präsentation',
      'Gewaltfreie Kommunikation',
      'Redaktion',
      'Lektorat',
    ],
  },
];

const Kompetenzen = () => {
  return (
    <div className={classes['tab-box']}>
      {webSkills.map((element) => (
        <div key={element.title} className={classes.elements}>
          <h3 className={classes.title}>{element.title}</h3>
          <div className={classes['skill-box']}>
            {element.tags.map((item) => (
              <div key={item.name} className={classes['skill--logo']}>
                <img className={classes.logo} src={item.logo} alt={item.name} />
                <div className={classes.name}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {tags.map((element) => (
        <div key={element.title} className={classes.elements}>
          <h3 className={classes.title}>{element.title}</h3>
          <div className={classes['skill-box']}>
            {element.tags.map((item) => (
              <div key={item} className={classes['skill--text']}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kompetenzen;
