import classes from './Container.module.css';

const Container = ({ children, className }) => (
  <div className={classes.center}>
    <div className={`${classes.container} ${className}`}>{children}</div>
  </div>
);

export default Container;
