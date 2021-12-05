import classes from './Section.module.css';

const Section = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
