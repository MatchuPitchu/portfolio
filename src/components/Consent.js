import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CookieConsent, { getCookieConsentValue, Cookies } from 'react-cookie-consent';
import GoogleAnalytics from './GoogleAnalytics';

const Consent = () => {
  const [isConsent, setIsConsent] = useState(false);

  useEffect(() => {
    const isAccepted = getCookieConsentValue();
    if (isAccepted === 'true') setIsConsent(true);
  }, []);

  const handleAcceptCookie = () => setIsConsent(true);

  // remove google analytics cookies
  const handleDeclineCookie = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  return (
    <>
      <CookieConsent
        disableStyles={true}
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonText='Akzeptieren'
        declineButtonText='Ablehnen'
        containerClasses='consent'
        contentClasses='consent__content'
        buttonWrapperClasses='consent__btn-wrapper'
        buttonClasses='consent__btn--accept'
        declineButtonClasses='consent__btn--decline'
      >
        <p>
          Diese Website verwendet Cookies, um die Benutzerfreundlichkeit der Seite weiter im Sinne
          der Nutzer:innen zu verbessern. Wir greifen ausschließlich auf Google Analytics für die
          Analyse und Statistik zurück - dafür bitten wir Sie freundlich um Erlaubnis. Sie können
          entscheiden, ob Sie dem zustimmen oder dies ablehnen. Bitte beachten Sie auch die{' '}
          <Link to='/datenschutz'>Datenschutzerklärung</Link>.
        </p>
      </CookieConsent>
      {isConsent && <GoogleAnalytics />}
    </>
  );
};

export default Consent;
