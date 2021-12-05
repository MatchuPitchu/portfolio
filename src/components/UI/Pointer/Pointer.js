import { HashLink } from 'react-router-hash-link';
import classes from './Pointer.module.css';

const Pointer = ({ to }) => {
  return (
    <HashLink smooth to={to} className={classes.scroll}>
      <div className={classes.pointer}>
        <span></span>
      </div>
    </HashLink>
  );
};

export default Pointer;
