import Container from '../components/Layout/Container';
import H1Title from '../components/UI/Titles/H1Title';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <Container className={classes['container-customized']}>
      <H1Title>404</H1Title>
      <p>Page Not Found</p>
    </Container>
  );
};

export default NotFound;
