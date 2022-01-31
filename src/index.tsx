import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mainElement = document.getElementById('main');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  mainElement
);
