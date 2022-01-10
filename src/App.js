import { useContext, lazy, Suspense } from 'react';
import { ThemeContext } from './store/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Layout/Container';
import Spinner from './components/UI/Spinner/Spinner';
import ScrollToTopButton from './components/ScrollToTopButton';
import Theme from './components/Theme';
import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './pages/Home';
import Veroeffentlichungen from './pages/Veroeffentlichungen';
import DigitalisierungDetails from './components/Publications/DigitalisierungDetails';
import SuffizienzDetails from './components/Publications/SuffizienzDetails';
import NetzwerkeDetails from './components/Publications/NetzwerkeDetails';
import KulturpolitikDetails from './components/Publications/Kulturpolitik/KulturpolitikDetails';
import BNEDetails from './components/Publications/BNEDetails';
import Angebote from './pages/Angebote';
import Kontakt from './pages/Kontakt';
import Footer from './components/Layout/Footer';

// create fontawesome library and import icons
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
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

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
  faArrowAltCircleUp,
  faSearch
);

const NetzwerkeKulturpolitik = lazy(() => import('./pages/NetzwerkeKulturpolitik'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Impressum = lazy(() => import('./pages/Impressum'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const { isLocalStorageChecked } = useContext(ThemeContext);

  if (!isLocalStorageChecked) return null;

  const spinner = (
    <Container>
      <Spinner />
    </Container>
  );

  return (
    <Theme>
      <Layout>
        <Navbar />
        <main>
          <Suspense fallback={spinner}>
            <Routes>
              <Route path='/' element={<Home />} />
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
              <Route path='/netzwerke-kulturpolitik/' element={<NetzwerkeKulturpolitik />} />
              <Route path='/angebote' element={<Angebote />} />
              <Route path='/kontakt' element={<Kontakt />} />
              <Route path='/datenschutz/' element={<Datenschutz />} />
              <Route path='/impressum/' element={<Impressum />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </Layout>
    </Theme>
  );
};

export default App;
