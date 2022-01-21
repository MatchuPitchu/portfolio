import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './Animating.module.css';

const AnimatingItem = ({ show, children }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={500}
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
