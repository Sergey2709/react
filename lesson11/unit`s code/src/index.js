import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import initialState from './store/initialState';

const store = createStore(rootReducer, initialState);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
