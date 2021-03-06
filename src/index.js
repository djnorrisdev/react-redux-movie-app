import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducer';
import thunk from 'redux-thunk';
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'normalize.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App';

require('dotenv').config()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

