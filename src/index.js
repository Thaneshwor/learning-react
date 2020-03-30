import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './components/day1/Person';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Person name='Thaneshwor Joshi' age='25' />
  </React.StrictMode>,
  document.getElementById('p1')
);

ReactDOM.render(
  <React.StrictMode>
    <Person name='Ramesh' age='40' />
  </React.StrictMode>,
  document.getElementById('p2')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
