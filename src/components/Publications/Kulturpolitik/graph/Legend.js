import ActivityPoint from '../../../UI/ActivityPoint/ActivityPoint';
import Card from '../../../UI/Card/Card';
import H3Title from '../../../UI/Titles/H3Title';
import classes from './Legend.module.css';

const groups = [
  { title: 'staatlich-kommunale geförderte Einrichtung', class: classes.group1 },
  { title: 'staatlich-kommunal', class: classes.group2 },
  { title: 'gemeinnützig orientiert', class: classes.group3 },
  { title: 'wissenschaftlich, ausbildend', class: classes.group4 },
  { title: 'touristisch', class: classes.group5 },
  { title: 'wirtschaftlich', class: classes.group6 },
  { title: 'Medien', class: classes.group7 },
];

const Legend = ({ links }) => {
  return (
    <Card className={classes['card-customize']}>
      <H3Title className={classes['title-customized']}>Akteursgruppe</H3Title>
      <div className={classes['legend-items']}>
        {groups.map((item) => (
          <ActivityPoint
            key={item.title}
            item={item.title}
            classIcon={item.class}
            className={classes['legend-item-customized']}
          />
        ))}
      </div>
      <H3Title className={classes['title-customized']}>Verbindungen</H3Title>
      <div className={classes['legend-items']}>
        {links.map((item) => (
          <ActivityPoint
            key={item.title}
            item={item.title}
            classIcon={item.class}
            className={classes['legend-item-customized']}
          />
        ))}
      </div>
    </Card>
  );
};

export default Legend;
