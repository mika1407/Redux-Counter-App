// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counterSlice';

// Konfiguroi store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// Luo juurisolmu
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderöi sovellus
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
