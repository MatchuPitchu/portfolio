import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextProvider from './store/ThemeContext';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import './styles.css';
import './fonts.css';

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <App />
      <ScrollToTop />
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);
