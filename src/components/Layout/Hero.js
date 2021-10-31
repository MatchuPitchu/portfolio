import Button from '../UI/Button/Button';
import Pointer from '../UI/Pointer';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>
        <div className={classes.title}>Dr.</div>
        <div className={classes.firstName}>Michael</div>
        <div className={classes.lastName}>Flohr</div>
      </h1>
      <Button>Test</Button>
      <Pointer />
    </section>
  );
};

export default Hero;
