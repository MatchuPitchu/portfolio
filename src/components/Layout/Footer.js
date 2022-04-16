import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

import react from '../../assets/logos/logo-reactjs.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.carbon}>
        <div className={classes['carbon__text']}>
          ~ 0.21g CO<sub>2</sub>
        </div>
        <div className={classes['carbon__link']}>Website Carbon Calculator</div>
        <div className={classes['carbon__description']}>
          weniger als 85% der getesteten Websites
        </div>
      </div>
      <div className={classes['navlinks-box']}>
        <NavLink className={classes.navlink} to='/datenschutz'>
          Datenschutz
        </NavLink>
        <NavLink className={classes.navlink} to='/impressum'>
          Impressum
        </NavLink>
      </div>
      <div className={classes.copyright}>
        <p className={classes.p}>
          Built with passion and React
          <a
            className={classes['a--no-shadow']}
            href='https://reactjs.org/'
            rel='noreferrer'
            target='_blank'
          >
            <img src={react} className={classes['icon-react']} alt='Logo React' />
          </a>
          Michael Flohr © 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
