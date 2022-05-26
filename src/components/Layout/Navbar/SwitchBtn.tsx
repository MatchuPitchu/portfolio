import { useThemeContext } from '../../../store/ThemeContext';
import classes from './SwitchBtn.module.css';

const SwitchBtn = () => {
  const { isLight, handleTheme } = useThemeContext();

  return (
    <button
      onClick={handleTheme}
      className={`${classes.switch} ${isLight ? '' : classes.night}`}
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
