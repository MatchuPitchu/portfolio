import classes from './Title.module.css';

const H2Title = ({ children, className }) => {
  return <h2 className={`${classes.title} ${className}`}>{children}</h2>;
};

export default H2Title;
