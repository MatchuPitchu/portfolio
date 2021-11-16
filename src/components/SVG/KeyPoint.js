import classes from './KeyPoint.module.css';

const KeyPoint = () => {
  return (
    <div>
      <svg
        className={classes.listIcon}
        focusable='false'
        viewBox='0 0 24 24'
        aria-hidden='true'
        data-testid='ExpandMoreIcon'
      >
        <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
      </svg>
    </div>
  );
};

export default KeyPoint;
