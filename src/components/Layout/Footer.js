import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../store/ThemeContext';
import classes from './Footer.module.css';

import linkedin from '../../assets/logos/logo-linkedin.svg';
import xing from '../../assets/logos/logo-xing.svg';
import researchgate from '../../assets/logos/logo-ResearchGate.svg';
import github from '../../assets/logos/logo-github.svg';
import githubDark from '../../assets/logos/logo-github-dark.svg';

const Footer = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <footer className={classes.footer}>
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
      <div className={classes['navlinks-box']}>
        <NavLink className={classes.navlink} to='/datenschutz'>
          Datenschutz
        </NavLink>
        <NavLink className={classes.navlink} to='/impressum'>
          Impressum
        </NavLink>
      </div>
      <p className={classes.copyright}>
        Built with passion and React
        <br />
        Michael Flohr © 2021
      </p>
    </footer>
  );
};

export default Footer;
