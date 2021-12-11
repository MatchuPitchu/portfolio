import classes from './Title.module.css';

const H3Title = ({ children }) => {
  return <h3 className={classes.title}>{children}</h3>;
};

export default H3Title;
