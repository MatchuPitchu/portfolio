import classes from './KeyPoint.module.css';

const KeyPoint = ({ className }) => {
  return (
    <div>
      <svg
        className={`${classes.listIcon} ${className}`}
        focusable='false'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
      </svg>
    </div>
  );
};

export default KeyPoint;
