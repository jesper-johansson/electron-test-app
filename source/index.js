import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  const App = require('./components/App/index'); // eslint-disable-line
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('app'));
};

render();
if (module.hot) module.hot.accept(render);
