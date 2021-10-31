import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Navbar.module.css';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // create fn that's called every time window is shrunk or widened
    // thanks to event listener that is added -> now, whenever window size changes,
    // state of component is updated
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const toggleMenuHandler = () => setToggleMenu((prev) => !prev);

  // nav is displayed if toggle clicked or screen greater than 500px
  const toggleContent = (toggleMenu || screenWidth > 500) && (
    <ul>
      <li>
        <a href='/'>meine arbeit</a>
      </li>
      <li>
        <a href='/'>kontakt</a>
      </li>
    </ul>
  );

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <div>
          Michael<span>Flohr</span>
        </div>
      </div>
      {toggleContent}
      <button onClick={toggleMenuHandler}>
        {!toggleMenu ? (
          <FontAwesomeIcon icon={['fa', 'bars']} />
        ) : (
          <FontAwesomeIcon icon={['fa', 'times']} />
        )}
      </button>
    </nav>
  );
};

export default Navigation;