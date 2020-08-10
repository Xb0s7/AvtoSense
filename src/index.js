import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home-page';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

