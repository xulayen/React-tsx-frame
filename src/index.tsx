import React from 'react';
import ReactDOM from 'react-dom';
import '@/internals/index.css';
// import App from './App';
import RouteIndex from './route';
import * as serviceWorker from './serviceWorker';
import fs from 'fs';
console.log(fs);

ReactDOM.render(
  <React.StrictMode>
    <RouteIndex />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
