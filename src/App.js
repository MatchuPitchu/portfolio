import { Fragment } from 'react';
import Introduction from './components/Introduction';

import Header from './components/Layout/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Introduction />
      </main>
    </Fragment>
  );
};

export default App;
