import Container from './Container';
import classes from './HeadingWrapper.module.css';

const HeadingWrapper = ({ children, className }) => {
  return (
    <Container className={`${classes['container-customized']} ${className}`}>{children}</Container>
  );
};

export default HeadingWrapper;
