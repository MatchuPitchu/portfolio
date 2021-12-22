import classes from './Spinner.module.css';

const Spinner = ({ className }) => {
  return <div className={`${classes.spinner} ${className}`} />;
};

export default Spinner;
