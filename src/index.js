import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './Drawer';
import './index.css';
import Banner from './Banner';
import Slider2 from "./Silder2";
import New from "./New";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Drawer />
    <Banner />
    <New />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
