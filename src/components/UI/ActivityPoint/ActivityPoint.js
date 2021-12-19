import { useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './ActivityPoint.module.css';

const ActivityPoint = ({ item, className, classIcon }) => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div key={item.date} className={`${classes.activity} ${className}`}>
      <Icon
        className={`${classes.icon} ${classIcon}`}
        icon={isLight ? ['fa', 'sun'] : ['fa', 'moon']}
      />
      <span className={classes.text}>{item}</span>
    </div>
  );
};

export default ActivityPoint;
