import classes from './List.module.css';

const List = ({ children, className }) => {
  return <ul className={`${classes.list} ${className}`}>{children}</ul>;
};

export default List;
