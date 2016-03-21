import React from 'react';
import {Router} from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes/routes';

import styles from './App.css';


let history = createBrowserHistory();


ReactDOM.render(
  <Router history={history}>{routes}</Router>,
  document.getElementById('app')
);

console.log('hola');
