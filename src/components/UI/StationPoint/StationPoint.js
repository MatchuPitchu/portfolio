import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './StationPoint.module.css';

const StationPoint = ({ item, className }) => {
  return (
    <div key={item.date} className={`${classes['station']} ${className}`}>
      <div className={classes['date']}>
        <Icon className={classes['date__icon']} icon={['fa', 'sun']} />
        <span className={classes['date__text']}>{item.date}</span>
        {item.href && (
          <a className={classes.link} href={item.href} target='_blank' rel='noreferrer'>
            Ansicht
          </a>
        )}
      </div>
      <div className={classes['title']}>{item.title}</div>
      <div className={classes['organization']}>{item.organization}</div>
      <p className={classes['content']}>{item.content}</p>
    </div>
  );
};

export default StationPoint;
