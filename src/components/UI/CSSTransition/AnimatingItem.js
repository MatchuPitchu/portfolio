import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './Animating.module.css';

const animationTiming = {
  enter: 1000,
  exit: 0,
};

const AnimatingItem = ({ show, children }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exit: classes.exit,
        exitActive: classes.exitActive,
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default AnimatingItem;
