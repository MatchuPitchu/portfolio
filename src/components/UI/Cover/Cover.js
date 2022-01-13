import { Link } from 'react-router-dom';
import ImgWithFallback from '../../ImgWithFallback';
import classes from './Cover.module.css';

const Cover = ({ path, coverJPG, coverWEBP, alt }) => {
  return (
    <div className={classes.cover}>
      <Link to={path}>
        <ImgWithFallback
          className={classes['cover__img']}
          src={coverWEBP}
          fallback={coverJPG}
          alt={alt}
        />
      </Link>
    </div>
  );
};

export default Cover;
