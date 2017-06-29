import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './components/home/Home';

ReactDOM.render(<Home />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/home/Home', () => {
    const NextHome = require('./components/home/Home').default;
    ReactDOM.render(<NextHome />, document.getElementById('root'));
  });
}
