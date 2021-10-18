import Button from '../UI/Button/Button';
import classes from './Hero.module.css';
import image from '../../assets/michael_flohr_web.jpg';

const Hero = () => {
  return (
    <section>
      <h1>
        <div className={classes.title}>Dr.</div>
        <div className={classes.firstName}>Michael</div>
        <div className={classes.lastName}>Flohr</div>
      </h1>
      <div>
        <Button>Test</Button>
      </div>
      <a href='#text' className={classes.scroll}>
        <div className={classes.pointer}>
          <span></span>
        </div>
      </a>
    </section>
  );
};

export default Hero;
