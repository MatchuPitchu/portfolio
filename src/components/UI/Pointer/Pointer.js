import { HashLink } from 'react-router-hash-link';
import classes from './Pointer.module.css';

const Pointer = ({ to }) => {
  return (
    <HashLink smooth to={to} className={classes.scroll}>
      <div className={classes.pointer}>
        <span className={classes.inner} />
        {/* only for accessibility for screenreaders */}
        <span className='sr-only'>Home</span>
      </div>
    </HashLink>
  );
};

export default Pointer;
