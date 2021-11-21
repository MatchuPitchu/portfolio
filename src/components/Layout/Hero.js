import Button from '../UI/Button/Button';
import Pointer from '../UI/Pointer';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h1>
          <span className={classes.title}>Dr</span>
          <span className={classes.name}>
            <span className={classes.firstName}>Michael</span>{' '}
            <span className={classes.lastName}>Flohr</span>
          </span>
        </h1>
      </div>
      <Button>Test</Button>
      <Pointer />
    </section>
  );
};

export default Hero;
