import classes from './Home.module.css';
import Hero from '../components/About/Hero';
import About from '../components/About/About';
import WebDev from '../components/About/WebDev';

const Introduction = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <About />
      <WebDev />
    </div>
  );
};

export default Introduction;
