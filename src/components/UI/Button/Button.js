import classes from './Button.module.css';

const width = '105';
const height = '50';

const Button = ({ type, className, onClick, disabled, ariaLabel, children }) => {
  return (
    <div className={classes['btn-container']}>
      <button
        type={type || 'button'}
        className={`${classes.btn} ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}>
          <polyline
            points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1`}
          ></polyline>
          <polyline
            points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1`}
          ></polyline>
        </svg>
        {children}
      </button>
    </div>
  );
};

export default Button;
