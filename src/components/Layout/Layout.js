import Hero from './Hero';
import Navbar from './Navbar';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={classes.header}>
        <Navbar />
        <Hero />
      </header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
