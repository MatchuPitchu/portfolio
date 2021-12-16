import classes from './NavbarMenuBtn.module.css';

const NavbarMenuBtn = ({ onToggleMenu, isMenuOpen }) => {
  return (
    <button
      className={`${classes['menu-btn']} ${isMenuOpen ? classes.open : ''}`}
      onClick={onToggleMenu}
    >
      <div className={classes['bar-one']} />
      <div className={classes['bar-two']} />
      <div className={classes['bar-three']} />
    </button>
  );
};

export default NavbarMenuBtn;
