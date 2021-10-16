import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1>
        <div className={classes.title}>Dr.</div>
        <div className={classes.firstName}>Michael</div>
        <div>
          <span className={classes.lastName}>Flohr</span>
        </div>
      </h1>
    </section>
  );
};

export default Hero;
