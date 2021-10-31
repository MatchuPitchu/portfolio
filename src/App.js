import Introduction from './components/Introduction';
import Layout from './components/Layout/Layout';

// create fontawesome library and import needed icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faTimes);

const App = () => {
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
};

export default App;
