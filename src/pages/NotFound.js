import HeadingWrapper from '../components/Layout/HeadingWrapper';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <HeadingWrapper className={classes.wrapper}>
      <H1Title>404</H1Title>
      <p>Page Not Found</p>
    </HeadingWrapper>
  );
};

export default NotFound;
