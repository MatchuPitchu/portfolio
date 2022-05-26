import { useState, useContext } from 'react';
import { ThemeContext } from '../../../store/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import NavbarMenuBtn from './NavbarMenuBtn';
import NavbarMenuItems from './NavbarMenuItems';
import SwitchBtn from './SwitchBtn';
import classes from './Navbar.module.css';
import Icons from './Icons';

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
      <div className={classes['navbar__container']}>
        <div className={classes['navbar__btns-box']}>
          <Link
            to='/'
            onClick={() => {
              scrollToTop();
              closeMenuHandler();
            }}
          >
            <Icon
              className={classes['navbar__icon']}
              icon={isLight ? ['fa', 'sun'] : ['fa', 'moon']}
            />
            {/* only for accessibility for screenreaders */}
            <span className='sr-only'>Home</span>
          </Link>
          <Icons isOnlyVisibleMobile={true} />
          <SwitchBtn isOnlyVisibleMobile={true} />
          <NavbarMenuBtn onToggleMenu={toggleMenuHandler} isMenuOpen={isMenuOpen} />
        </div>
        <NavbarMenuItems onClose={closeMenuHandler} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
