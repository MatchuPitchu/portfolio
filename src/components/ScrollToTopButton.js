import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else setVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [toggleVisible]);

  return (
    <Icon
      className={classes.btn}
      icon={['fa', 'arrow-alt-circle-up']}
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    />
  );
};

export default React.memo(ScrollToTopButton);
