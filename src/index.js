import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextProvider from './store/ThemeContext';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalytics from './components/GoogleAnalytics';

import './styles.css';
import './fonts.css';

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <App />
      <ScrollToTop />
      <GoogleAnalytics />
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);
