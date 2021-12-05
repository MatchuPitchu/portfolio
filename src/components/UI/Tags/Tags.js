import classes from './Tags.module.css';

const Tags = ({ tags, className }) => {
  return (
    <div className={`${classes.tags} ${className}`}>
      {tags.map((tag) => (
        <span key={tag} className={classes.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
