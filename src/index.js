import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store'; 
import './index.css';

createRoot(document.getElementById('root')).render( 
  <Provider store={store}>
    <BrowserRouter basename="/car-rental">
      <App />
    </BrowserRouter>
  </Provider>
);