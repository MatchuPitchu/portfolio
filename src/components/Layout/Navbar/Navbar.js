import { useState, useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import NavbarMenuBtn from './NavbarMenuBtn';
import NavbarMenuItems from './NavbarMenuItems';
import SwitchBtn from './SwitchBtn';
import classes from './Navbar.module.css';

const Navigation = () => {
  const { isLight } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => setIsMenuOpen((prev) => !prev);
  const closeMenuHandler = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Link
          to='/'
          onClick={() => {
            scrollToTop();
            closeMenuHandler();
          }}
        >
          <Icon className={classes.icon} icon={isLight ? ['fa', 'sun'] : ['fa', 'moon']} />
        </Link>
        <SwitchBtn />
        <NavbarMenuBtn onToggleMenu={toggleMenuHandler} isMenuOpen={isMenuOpen} />
        <NavbarMenuItems onClose={closeMenuHandler} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
