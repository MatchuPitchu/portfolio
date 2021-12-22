import classes from './Home.module.css';
import Hero from '../components/About/Hero';
import About from '../components/About/About';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <About />
    </div>
  );
};

export default Introduction;
