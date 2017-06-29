import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './components/home/Home';

ReactDOM.render(
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
