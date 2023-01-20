import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

// alert
import {Provider as AlertProvider,positions,transitions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// redux
import { Provider } from 'react-redux';
import store from './store';

const options={
  positions:positions.TOP_CENTER,
  timeout: 3000,
  transitions:transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options} >
          <Router>
            <App />
          </Router>
          </AlertProvider>
        </Provider>
    </React.StrictMode>
    
);
