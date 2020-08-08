import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';
import UnderConstruction from '../src/components/Home/UnderConstruction';

import './stylesheets/index.scss';
import './stylesheets/reset.scss';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
