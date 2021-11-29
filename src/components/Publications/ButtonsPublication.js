import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

import classes from './ButtonsPublication.module.css';

const ButtonsPublication = ({ url, path }) => {
  return (
    <div className={classes.buttons}>
      <div>
        <Link to={path}>
          <Button>Mehr Infos</Button>
        </Link>
      </div>
      <div>
        <a href={url} target='_blank' rel='noreferrer'>
          <Button>Link</Button>
        </a>
      </div>
    </div>
  );
};

export default ButtonsPublication;
