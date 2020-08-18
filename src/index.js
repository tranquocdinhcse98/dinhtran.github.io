import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import './assets/styles/main.scss';

ReactDOM.render(<App />, document.getElementById('app'));