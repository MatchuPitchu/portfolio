import { Routes, Route } from 'react-router-dom';

// create fontawesome library and import needed icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faXing, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Veroeffentlichungen from './Pages/Veroeffentlichungen';
import Kulturpolitik from './Pages/Kulturpolitik';
import Angebote from './Pages/Angebote';
import Kontakt from './Pages/Kontakt';
import Footer from './components/Layout/Footer';

library.add(faLinkedin, faXing, faGithub, faBars, faTimes, faPlus, faMinus);

const App = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/veroeffentlichungen' element={<Veroeffentlichungen />} />
          <Route path='/kulturpolitik' element={<Kulturpolitik />} />
          <Route path='/angebote' element={<Angebote />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
