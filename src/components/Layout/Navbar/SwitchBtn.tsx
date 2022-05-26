import { VFC } from 'react';
import { useThemeContext } from '../../../store/ThemeContext';
import classes from './SwitchBtn.module.css';

type Props = {
  isOnlyVisibleMobile: boolean;
};

const SwitchBtn: VFC<Props> = ({ isOnlyVisibleMobile = false }) => {
  const { isLight, handleTheme } = useThemeContext();

  const deviceSpecificStyles = isOnlyVisibleMobile
    ? classes['btn--mobile']
    : classes['btn--desktop'];

  return (
    <button
      onClick={handleTheme}
      className={`${classes.switch} ${isLight ? '' : classes.night} ${deviceSpecificStyles}`}
      aria-label='toggle dark light mode'
    >
      <div className={classes.moon}>
        <div className={classes.crater} />
        <div className={classes.crater} />
      </div>
      <div>
        <div className={`${classes.shape} ${classes.sm}`} />
        <div className={`${classes.shape} ${classes.sm}`} />
        <div className={`${classes.shape} ${classes.md}`} />
        <div className={`${classes.shape} ${classes.lg}`} />
      </div>
    </button>
  );
};

export default SwitchBtn;
