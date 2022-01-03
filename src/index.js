import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextProvider from './store/ThemeContext';
import ScrollToTop from './components/Layout/ScrollToTop';
import App from './App';

import './styles.css';
import './fonts.css';

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <ScrollToTop />
      <App />
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);
