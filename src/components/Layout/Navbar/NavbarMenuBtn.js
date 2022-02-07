import classes from './NavbarMenuBtn.module.css';

const NavbarMenuBtn = ({ onToggleMenu, isMenuOpen }) => {
  return (
    <button
      className={`${classes['menu-btn']} ${isMenuOpen ? classes.open : ''}`}
      onClick={onToggleMenu}
      aria-label='toggle navigation menu'
    >
      <span className={classes.bar} />
    </button>
  );
};

export default NavbarMenuBtn;
