import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/index.scss';
import './stylesheets/reset.scss';
import App from './components/App';
import UnderConstruction from './components/UnderConstruction';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UnderConstruction />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
