import Navigation from './Navigation';
import Hero from './Hero';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
