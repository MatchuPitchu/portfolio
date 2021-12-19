import classes from './H1Title.module.css';

const H1Title = ({ children, classTitle }) => {
  return (
    <div className={classes['h1-container']}>
      <h1 className={`${classes.title} ${classTitle}`}>{children}</h1>
    </div>
  );
};

export default H1Title;
