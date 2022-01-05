import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavbarMenuItems.module.css';

const paths = [
  {
    path: '/veroeffentlichungen',
    name: 'veröffentlichungen',
    subpath: [
      { path: '/veroeffentlichungen/digitalisierung', name: 'digitalisierung' },
      { path: '/veroeffentlichungen/suffizienz-an-hochschulen', name: 'suffizienz' },
      {
        path: '/veroeffentlichungen/nachhaltigkeitsnetzwerke-an-hochschulen',
        name: 'netzwerke hochschule',
      },
      { path: '/veroeffentlichungen/kulturpolitik', name: 'kulturpolitik' },
      { path: '/veroeffentlichungen/bne', name: 'bildung' },
    ],
  },
  { path: '/netzwerke-kulturpolitik', name: 'netzwerke kulturpolitik' },
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

  // navbar is only shown if toggle is clicked or screen greater than 576px
  if (isMenuOpen || screenWidth > 730)
    return (
      <ul className={classes['menu-items']}>
        {paths.map((nav) => (
          <li key={nav.name} className={classes.dropdown} onClick={onClose}>
            <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to={nav.path}>
              {nav.name}
            </NavLink>
            {nav.subpath && (
              <div className={classes['dropdown-content']}>
                {nav.subpath.map((subNav) => (
                  <NavLink
                    onClick={onClose}
                    key={subNav.name}
                    className={({ isActive }) => (isActive ? classes.active : '')}
                    to={subNav.path}
                  >
                    {subNav.name}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    );

  return null;
};

export default NavbarMenuItems;
