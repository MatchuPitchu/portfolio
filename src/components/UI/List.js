import classes from './List.module.css';

const List = ({ children }) => {
  return (
    <div className={classes.list}>
      <ul>{children}</ul>
    </div>
  );
};

export default List;
