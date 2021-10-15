import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , root
  )
}
