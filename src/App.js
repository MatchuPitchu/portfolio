import { Routes, Route } from 'react-router-dom';

// create fontawesome library and import needed icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faXing, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
import Introduction from './Pages/Introduction';
import About from './Pages/About';
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
          <Route path='/' element={<Introduction />} />
          <Route path='/about' element={<About />} />
          <Route path='/angebote' element={<Angebote />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
