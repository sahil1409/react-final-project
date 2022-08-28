import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createStore} from 'redux';
import allReducer from './reducers'; //We dont have to add './reducers/index.js' because the wepack will automatically look
import { Provider } from 'react-redux';

const myStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

