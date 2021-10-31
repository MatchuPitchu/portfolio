import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Icon href='#' icon={['fab', 'linkedin']} />
        <Icon href='#' icon={['fab', 'xing']} />
        <Icon href='#' icon={['fab', 'github']} />
      </div>
      <p class='copyright'>Michael Flohr © 2021</p>
    </footer>
  );
};

export default Footer;

// item social'
