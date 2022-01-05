import classes from './Title.module.css';

const H3Title = ({ children, className }) => {
  return <h3 className={`${classes.title} ${className}`}>{children}</h3>;
};

export default H3Title;
