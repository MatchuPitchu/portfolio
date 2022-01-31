import classes from './Button.module.css';

const width = '120';
const height = '50';

const Button = ({
  svgAnimation = true,
  type,
  className,
  onClick,
  disabled,
  ariaLabel,
  children,
}) => {
  return (
    <div className={classes['btn-container']}>
      <button
        type={type || 'button'}
        className={`${classes.btn} ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {svgAnimation && (
          <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}>
            <polyline
              points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${
                width - 1
              },1`}
            ></polyline>
            <polyline
              points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${
                width - 1
              },1`}
            ></polyline>
          </svg>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
