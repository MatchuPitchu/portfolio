import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === '/netzwerke-kulturpolitik/information' ||
      pathname === '/netzwerke-kulturpolitik/kooperation' ||
      pathname === '/netzwerke-kulturpolitik/ziel'
    ) {
      return;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
