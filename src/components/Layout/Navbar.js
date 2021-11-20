import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './Navbar.module.css';

const menu = [
  { path: 'veroeffentlichungen', name: 'veröffentlichungen' },
  {
    path: '/about',
    name: 'meine arbeit',
    subpath: [{ path: 'kulturpolitik', name: 'kulturpolitik' }],
  },
  { path: '/angebote', name: 'angebote' },
  { path: '/kontakt', name: 'kontakt' },
];

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // create fn that's called every time window is shrunk or widened
    // thanks to event listener that is added -> now, whenever window size changes,
    // state of component is updated
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const toggleMenuHandler = () => setToggleMenu((prev) => !prev);
  const toggleSubmenuHandler = () => setToggleSubmenu((prev) => !prev);

  // nav is displayed if toggle clicked or screen greater than 600px
  const toggleContent = (toggleMenu || screenWidth > 600) && (
    <ul className={classes.menu}>
      {menu.map((nav) => (
        <li className={classes.col} key={nav.name}>
          <div className={classes.row}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to={nav.path}
            >
              {nav.name}
            </NavLink>
            {nav.subpath && (
              <button className={classes['submenu-btn']} onClick={toggleSubmenuHandler}>
                {!toggleSubmenu ? <Icon icon={['fa', 'plus']} /> : <Icon icon={['fa', 'minus']} />}
              </button>
            )}
          </div>
          <ul className={classes.submenu}>
            {toggleSubmenu &&
              nav.subpath?.map((sub) => (
                <li key={sub.name}>
                  <NavLink
                    className={(navData) => (navData.isActive ? classes.active : '')}
                    to={sub.path}
                  >
                    {sub.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to='/'>
            Michael<span>Flohr</span>
          </Link>
        </div>
        <button className={classes['menu-btn']} onClick={toggleMenuHandler}>
          {!toggleMenu ? <Icon icon={['fa', 'bars']} /> : <Icon icon={['fa', 'times']} />}
        </button>
        {toggleContent}
      </div>
    </nav>
  );
};

export default Navigation;
