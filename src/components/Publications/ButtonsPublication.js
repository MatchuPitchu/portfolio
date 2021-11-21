import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

import classes from './ButtonsPublication.module.css';

const ButtonsPublication = ({ url, path }) => {
  return (
    <div className={classes.buttons}>
      <div>
        <a href={url} target='_blank' rel='noreferrer'>
          <Button>Ansicht</Button>
        </a>
      </div>
      <div>
        <Link to={path}>
          <Button>Mehr lesen</Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonsPublication;
