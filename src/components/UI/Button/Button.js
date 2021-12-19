import React from 'react';

import classes from './Button.module.css';

const width = '105';
const height = '50';

const Button = (props) => {
  return (
    <div className={classes['btn-container']}>
      <button
        type={props.type || 'button'}
        className={`${classes.btn} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`}>
          <polyline
            points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1`}
          ></polyline>
          <polyline
            points={`${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1`}
          ></polyline>
        </svg>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
