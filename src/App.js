import { Routes, Route } from 'react-router-dom';

// create fontawesome library and import needed icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faXing, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faSun,
  faQuoteLeft,
  faQuoteRight,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
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
import Footer from './components/Layout/Footer';

library.add(
  faLinkedin,
  faXing,
  faGithub,
  faPlus,
  faMinus,
  faExternalLinkAlt,
  faSun,
  faQuoteLeft,
  faQuoteRight,
  faCaretLeft,
  faCaretRight
);

const App = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/veroeffentlichungen/' element={<Veroeffentlichungen />} />
          <Route path='/veroeffentlichungen/digitalisierung' element={<DigitalisierungDetails />} />
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
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
