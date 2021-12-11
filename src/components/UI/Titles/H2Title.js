import classes from './Title.module.css';

const H3Title = ({ children }) => {
  return <h2 className={classes.title}>{children}</h2>;
};

export default H3Title;
