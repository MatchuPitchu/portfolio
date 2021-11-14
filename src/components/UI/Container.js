import classes from './Container.module.css';

const Container = ({ children }) => (
  <div className={classes.center}>
    <div className={classes.container}>{children}</div>
  </div>
);

export default Container;
