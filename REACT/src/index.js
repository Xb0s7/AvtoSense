import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './utils/navigation';
import UserProvider from './UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Navigation />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

