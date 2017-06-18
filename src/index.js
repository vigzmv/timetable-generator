// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <div> Hello World!</div>,
  document.getElementById('root'),
);

registerServiceWorker();
