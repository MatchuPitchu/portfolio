import { useContext } from 'react';
import { ThemeContext } from './store/ThemeContext';
import { Routes, Route } from 'react-router-dom';

// create fontawesome library and import needed icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faSun,
  faMoon,
  faQuoteLeft,
  faQuoteRight,
  faCaretLeft,
  faCaretRight,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons';

import Theme from './components/Theme';
import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Veroeffentlichungen from './Pages/Veroeffentlichungen';
import DigitalisierungDetails from './components/Publications/DigitalisierungDetails';
import SuffizienzDetails from './components/Publications/SuffizienzDetails';
import NetzwerkeDetails from './components/Publications/NetzwerkeDetails';
import KulturpolitikDetails from './components/Publications/Kulturpolitik/KulturpolitikDetails';
import BNEDetails from './components/Publications/BNEDetails';
import Angebote from './Pages/Angebote';
import Kontakt from './Pages/Kontakt';
import Datenschutz from './Pages/Datenschutz';
import Impressum from './Pages/Impressum';
import NotFound from './Pages/NotFound';
import Footer from './components/Layout/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

library.add(
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faSun,
  faMoon,
  faQuoteLeft,
  faQuoteRight,
  faCaretLeft,
  faCaretRight,
  faArrowAltCircleUp
);

const App = () => {
  const { isLocalStorageChecked } = useContext(ThemeContext);

  if (!isLocalStorageChecked) return null;

  return (
    <Theme>
      <Layout>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/veroeffentlichungen/' element={<Veroeffentlichungen />} />
            <Route
              path='/veroeffentlichungen/digitalisierung'
              element={<DigitalisierungDetails />}
            />
            <Route
              path='/veroeffentlichungen/suffizienz-an-hochschulen'
              element={<SuffizienzDetails />}
            />
            <Route
              path='/veroeffentlichungen/nachhaltigkeitsnetzwerke-an-hochschulen'
              element={<NetzwerkeDetails />}
            />
            <Route path='/veroeffentlichungen/kulturpolitik' element={<KulturpolitikDetails />} />
            <Route path='/veroeffentlichungen/bne' element={<BNEDetails />} />
            <Route path='/angebote' element={<Angebote />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/datenschutz/' element={<Datenschutz />} />
            <Route path='/impressum/' element={<Impressum />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </Layout>
    </Theme>
  );
};

export default App;
