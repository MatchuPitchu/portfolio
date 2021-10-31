import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <a
          href='https://www.linkedin.com/in/dr-michael-flohr-952649211'
          rel='noreferrer'
          target='_blank'
        >
          <Icon href='#' icon={['fab', 'linkedin']} />
        </a>
        <a href='https://www.xing.com/profile/Michael_Flohr9' rel='noreferrer' target='_blank'>
          <Icon href='#' icon={['fab', 'xing']} />
        </a>
        <a href='https://github.com/MatchuPitchu' rel='noreferrer' target='_blank'>
          <Icon href='#' icon={['fab', 'github']} />
        </a>
      </div>
      <p class='copyright'>Michael Flohr © 2021</p>
    </footer>
  );
};

export default Footer;
