import Card from '../UI/Card/Card';
import DWChart from 'react-datawrapper-chart';
import H3Title from '../UI/Titles/H2Title';
import classes from './Map.module.css';
import ActivityPoint from '../UI/ActivityPoint/ActivityPoint';

const legend = [
  { title: 'Moderationen', class: classes.blue },
  { title: 'Workshops', class: classes.red },
  { title: 'Vorträge', class: classes.yellow },
];

const Map = () => {
  return (
    <Card className={classes['card-customize']}>
      <DWChart className={classes.map} title='map' src='//datawrapper.dwcdn.net/EN7JW/11/' />
      <div className={classes['legend-box']}>
        <figcaption className={classes.source}>Erstellt mit Datawrapper</figcaption>
        <H3Title>Legende</H3Title>
        <div className={classes['legend-items']}>
          {legend.map((item) => (
            <ActivityPoint
              key={item.title}
              item={item.title}
              classIcon={item.class}
              className={classes['legend-item-customized']}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Map;
