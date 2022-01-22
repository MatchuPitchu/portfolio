import { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import { NavLink } from 'react-router-dom';
import classes from './NavbarMenuItems.module.css';

const paths = [
  {
    path: '/veroeffentlichungen',
    name: 'veröffentlichungen',
    subnav: [
      { path: '/digitalisierung', name: 'digitalisierung' },
      { path: '/suffizienz-an-hochschulen', name: 'suffizienz' },
      { path: '/nachhaltigkeitsnetzwerke-an-hochschulen', name: 'netzwerke hochschule' },
      { path: '/kulturpolitik', name: 'kulturpolitik' },
      { path: '/bne', name: 'bildung' },
    ],
  },
  {
    path: '/netzwerke-kulturpolitik',
    name: 'netzwerke kulturpolitik',
    subnav: [
      { path: '/informationsnetzwerk', name: 'informationsnetzwerk' },
      { path: '/kooperationsnetzwerk', name: 'kooperationsnetzwerk' },
      { path: '/zielnetzwerk', name: 'netzwerk der ziele' },
    ],
  },
  { path: '/angebote', name: 'angebote' },
  { path: '/kontakt', name: 'kontakt' },
];

const NavbarMenuItems = ({ isMenuOpen, onClose }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // create fn that's called every time window is shrunk or widened
    // event listener makes that whenever window size changes, state is updated
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const menu = (
    <ul className={classes['menu-list']} onClick={onClose}>
      {paths.map((nav) => (
        <li key={nav.name} className={classes.dropdown}>
          <NavLink
            className={({ isActive }) =>
              `${classes['link--nav']} ${isActive ? classes.active : ''}`
            }
            to={nav.path}
          >
            {nav.name}
          </NavLink>
          {nav.subnav && (
            <ul className={classes['dropdown-sublist']}>
              {nav.subnav.map((subnav) => (
                <NavLink
                  key={subnav.name}
                  className={({ isActive }) =>
                    `${classes['link--subnav']} ${isActive ? classes.active : ''}`
                  }
                  to={`${nav.path}${subnav.path}`}
                >
                  {subnav.name}
                </NavLink>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  if (screenWidth > 730) return menu;

  // navbar is only shown if toggle is clicked or screen greater than 576px
  if (screenWidth <= 730)
    return (
      <AnimateHeight
        className={classes['menu-wrapper']}
        duration={500}
        height={isMenuOpen ? 'auto' : 0}
      >
        {menu}
      </AnimateHeight>
    );

  return null;
};

export default NavbarMenuItems;
