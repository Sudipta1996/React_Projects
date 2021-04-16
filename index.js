import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {provider} from 'react-redux';
import {store} from './reduxTool';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <provider store={store}>
    <App />
    </provider>
  

  </React.StrictMode>,
 
    
  
  document.getElementById('root')
);
serviceWorker.unregister();
