import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import NavbarMenuBtn from './NavbarMenuBtn';
import NavbarMenuItems from './NavbarMenuItems';
import SwitchBtn from './SwitchBtn';
import classes from './Navbar.module.css';

const Navigation = () => {
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
        <Link to='/' onClick={scrollToTop}>
          <Icon className={classes.icon} icon={['fa', 'sun']} />
        </Link>
        <SwitchBtn />
        <NavbarMenuBtn onToggleMenu={toggleMenuHandler} isMenuOpen={isMenuOpen} />
        <NavbarMenuItems onClose={closeMenuHandler} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
