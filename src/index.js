import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
// import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
