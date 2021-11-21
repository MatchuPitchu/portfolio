import classes from './Tags.module.css';

const Tags = ({ tags }) => {
  return (
    <div className={classes.tags}>
      {tags.map((tag) => (
        <span key={tag} className={classes.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
