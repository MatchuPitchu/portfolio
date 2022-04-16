import { FC, useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import classes from './Icons.module.css';
// Icons
import linkedin from '../../../assets/logos/logo-linkedin.svg';
import xing from '../../../assets/logos/logo-xing.svg';
import researchgate from '../../../assets/logos/logo-ResearchGate.svg';
import github from '../../../assets/logos/logo-github.svg';
import githubDark from '../../../assets/logos/logo-github-dark.svg';

type Props = {
  isOnlyVisibleMobile: boolean;
};

const Icons: FC<Props> = ({ isOnlyVisibleMobile = false }) => {
  const { isLight } = useContext(ThemeContext);

  const deviceSpecificStyles = isOnlyVisibleMobile
    ? classes['icons--mobile']
    : classes['icons--desktop'];

  return (
    <div className={`${classes.icons} ${deviceSpecificStyles}`}>
      <a
        href='https://www.linkedin.com/in/dr-michael-flohr-952649211'
        rel='noreferrer'
        target='_blank'
      >
        <img className={classes.logo} src={linkedin} alt='Logo LinkedIn' />
        <img className={classes['logo--hidden']} src={linkedin} alt='Logo LinkedIn' />
      </a>
      <a href='https://www.xing.com/profile/Michael_Flohr9' rel='noreferrer' target='_blank'>
        <img className={classes.logo} src={xing} alt='Logo Xing' />
        <img className={classes['logo--hidden']} src={xing} alt='Logo Xing' />
      </a>
      <a href='https://www.researchgate.net/profile/Michael-Flohr' rel='noreferrer' target='_blank'>
        <img className={classes.logo} src={researchgate} alt='Logo ResearchGate' />
        <img className={classes['logo--hidden']} src={researchgate} alt='Logo ResearchGate' />
      </a>
      <a href='https://github.com/MatchuPitchu' rel='noreferrer' target='_blank'>
        <img className={classes.logo} src={isLight ? github : githubDark} alt='Logo GitHub' />
        <img
          className={classes['logo--hidden']}
          src={isLight ? github : githubDark}
          alt='Logo GitHub'
        />
      </a>
    </div>
  );
};

export default Icons;
