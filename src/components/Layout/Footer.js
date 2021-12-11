import classes from './Footer.module.css';

import linkedin from '../../assets/logos/logo-linkedin.svg';
import xing from '../../assets/logos/logo-xing.svg';
import github from '../../assets/logos/logo-github.svg';

const Footer = () => {
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
        <a href='https://github.com/MatchuPitchu' rel='noreferrer' target='_blank'>
          <img className={classes.logo} src={github} alt='Logo GitHub' />
        </a>
      </div>
      <p className={classes.copyright}>Michael Flohr © 2021</p>
    </footer>
  );
};

export default Footer;
