import Images from '../Images';
import Button from '../UI/Button/Button';
import Pointer from '../UI/Pointer';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h1>
          <div className={classes.title}>Dr</div>
          <div className={classes.name}>
            <span className={classes.firstName}>Michael</span>{' '}
            <span className={classes.lastName}>Flohr</span>
          </div>
        </h1>
      </div>
      <Button>Test</Button>
      <Pointer />
    </section>
  );
};

export default Hero;
