import classes from './Card.module.css';

const Card = ({ className, children }) => {
  return <section className={`${classes.card} ${className}`}>{children}</section>;
};

export default Card;
