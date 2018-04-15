import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './configureStore';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById( 'root' ),
);

registerServiceWorker();
