import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import AnimateHeight from 'react-animate-height';
import { NavLink } from 'react-router-dom';
import classes from './NavbarMenuItems.module.css';
// Icons
import linkedin from '../../../assets/logos/logo-linkedin.svg';
import xing from '../../../assets/logos/logo-xing.svg';
import researchgate from '../../../assets/logos/logo-ResearchGate.svg';
import github from '../../../assets/logos/logo-github.svg';
import githubDark from '../../../assets/logos/logo-github-dark.svg';

const paths = [
  { path: '/webentwicklung', name: 'webentwicklung' },
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
      { path: '/information', name: 'informationsnetzwerk' },
      { path: '/kooperation', name: 'kooperationsnetzwerk' },
      { path: '/ziel', name: 'netzwerk der ziele' },
    ],
  },
  { path: '/angebote', name: 'angebote' },
  { path: '/kontakt', name: 'kontakt' },
];

const NavbarMenuItems = ({ isMenuOpen, onClose }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isLight } = useContext(ThemeContext);

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
      <li>
        <div className={classes.icons}>
          <a
            href='https://www.linkedin.com/in/dr-michael-flohr-952649211'
            rel='noreferrer'
            target='_blank'
          >
            <img className={classes.logo} src={linkedin} alt='Logo LinkedIn' />
          </a>
          <a href='https://www.xing.com/profile/Michael_Flohr9' rel='noreferrer' target='_blank'>
            <img className={classes.logo} src={xing} alt='Logo Xing' />
          </a>
          <a
            href='https://www.researchgate.net/profile/Michael-Flohr'
            rel='noreferrer'
            target='_blank'
          >
            <img className={classes.logo} src={researchgate} alt='Logo ResearchGate' />
          </a>
          <a href='https://github.com/MatchuPitchu' rel='noreferrer' target='_blank'>
            <img className={classes.logo} src={isLight ? github : githubDark} alt='Logo GitHub' />
          </a>
        </div>
      </li>
    </ul>
  );

  if (screenWidth > 1100) return menu;

  // navbar is only shown if toggle is clicked or screen greater than 576px
  if (screenWidth <= 1100)
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
