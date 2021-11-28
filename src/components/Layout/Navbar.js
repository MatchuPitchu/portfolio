import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './Navbar.module.css';

const paths = [
  { path: 'veroeffentlichungen', name: 'veröffentlichungen' },
  // {
  //   path: '/about',
  //   name: 'meine arbeit',
  //   subpath: [{ path: 'kulturpolitik', name: 'kulturpolitik' }],
  // },
  { path: '/angebote', name: 'angebote' },
  { path: '/kontakt', name: 'kontakt' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // create fn that's called every time window is shrunk or widened
    // thanks to event listener that is added -> now, whenever window size changes,
    // state of component is updated
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const toggleMenuHandler = () => setIsMenuOpen((prev) => !prev);

  // nav is displayed if toggle clicked or screen greater than 600px
  const menu = (isMenuOpen || screenWidth > 600) && (
    <ul className={classes.menu}>
      {paths.map((nav) => (
        <li key={nav.name}>
          <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to={nav.path}>
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Link to='/'>
          <Icon className={classes.icon} icon={['fa', 'sun']} />
        </Link>
        <button
          className={`${classes['menu-btn']} ${isMenuOpen ? classes.open : ''}`}
          onClick={toggleMenuHandler}
        >
          <div className={classes['bar-one']} />
          <div className={classes['bar-two']} />
          <div className={classes['bar-three']} />
        </button>
        {menu}
      </div>
    </nav>
  );
};

export default Navigation;
