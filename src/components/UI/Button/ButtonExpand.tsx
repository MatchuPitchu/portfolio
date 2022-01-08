import classes from './ButtonExpand.module.css';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isExpanded: boolean;
  ariaExpanded: boolean;
  ariaLabel: string;
}

const ButtonExpand: React.FC<Props> = ({ onClick, isExpanded, ariaExpanded, ariaLabel }) => {
  return (
    <button
      className={classes.btn}
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      <svg
        className={`${classes.svg} ${
          isExpanded ? classes['rotate-open'] : classes['rotate-closed']
        }`}
        focusable='false'
        viewBox='0 0 24 24'
        aria-hidden='true'
        data-testid='ExpandMoreIcon'
      >
        <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
      </svg>
    </button>
  );
};

export default ButtonExpand;
