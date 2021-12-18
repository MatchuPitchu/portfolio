import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './ActivityPoint.module.css';

const ActivityPoint = ({ item, className }) => {
  return (
    <div key={item.date} className={`${classes.activity} ${className}`}>
      <Icon className={classes.icon} icon={['fa', 'sun']} />

      <span className={classes.text}>{item}</span>
    </div>
  );
};

export default ActivityPoint;
