import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CookieConsent, { getCookieConsentValue, Cookies } from 'react-cookie-consent';
import GoogleAnalytics from './GoogleAnalytics';
import classes from './Consent.module.css';

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
        containerClasses={classes.consent}
        contentClasses={classes['consent__content']}
        buttonWrapperClasses={classes['consent__btn-wrapper']}
        buttonClasses={classes['consent__btn--accept']}
        declineButtonClasses={classes['consent__btn--decline']}
      >
        <p>
          Diese Website verwendet Cookies, um die Benutzerfreundlichkeit der Seite weiter im Sinne
          der Nutzer:innen zu verbessern. Dafür werden mithilfe des Analysetools Google Analytics
          anonyme, nicht personenbezogene Daten gebündelt - dafür bitten wir Sie freundlich um
          Erlaubnis. Sie können entscheiden, ob Sie dem zustimmen oder dies ablehnen. Bitte beachten
          Sie auch die <Link to='/datenschutz'>Datenschutzerklärung</Link>. Dort können Sie
          jederzeit Ihre getroffene Entscheidung zurücksetzen.
        </p>
      </CookieConsent>
      {isConsent && <GoogleAnalytics />}
    </>
  );
};

export default Consent;
