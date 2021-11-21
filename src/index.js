import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';

import './styles.css';
import App from './App';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);
