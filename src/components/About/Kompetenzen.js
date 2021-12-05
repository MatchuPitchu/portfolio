import Tags from '../UI/Tags/Tags';
import classes from './Kompetenzen.module.css';

const tags = [
  {
    title: 'Web- & App-Entwicklung',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'SQL',
      'MongoDB',
      'WordPress',
      'Git',
      'GitHub',
      'InDesign',
      'Illustrator',
      'Photoshop',
    ],
  },
  {
    title: 'Libraries und Frameworks',
    tags: ['React', 'Ionic', 'Express.js', 'Bootstrap'],
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

  {
    title: 'Inhalte',
    tags: [
      'Web- & App-Entwicklung',
      'Digitalisierung',
      'Nachhaltige Entwicklung',
      'Nachhaltige Hochschulentwicklung',
      'Politikwissenschaft',
      'Kulturpolitik',
      'Kulturmanagement',
      'Musikerziehung',
      'Soziologie',
      'Wirtschaftswissenschaften',
      'Interkulturelle Wirtschaftskommunikation',
    ],
  },
];

const Kompetenzen = () => {
  return (
    <div className={classes['tab-box']}>
      {tags.map((element) => (
        <div key={element.title} className={classes.elements}>
          <h3>{element.title}</h3>
          <Tags tags={element.tags} className={classes['customize-tags']} />
        </div>
      ))}
    </div>
  );
};

export default Kompetenzen;
