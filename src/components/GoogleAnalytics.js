import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics = () => {
  useEffect(() => {
    let id;
    try {
      id = setTimeout(() => {
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        ReactGA.send('pageview');
      }, 4000);
    } catch (err) {
      console.log(err);
    }
    return () => clearTimeout(id);
  }, []);

  return null;
};

export default GoogleAnalytics;
