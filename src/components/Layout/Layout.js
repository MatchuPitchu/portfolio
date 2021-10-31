import Hero from './Hero';
import Navbar from './Navbar';
import classes from './Layout.module.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Navbar />
        <Hero />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
