import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Provider } from 'react-redux';
import {Auth0Provider }from '@auth0/auth0-react';
//import {store} from './app/store';

ReactDOM.render(
  <React.StrictMode>

    <Auth0Provider

      domain='dev-xtb4vwbc.us.auth0.com'
      clientId='50kuK6nKkD9gWLVRPZBsKxQTnPgq6ZJJ'
      redirectUri={window.location.origin}
    >


       <App />
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
