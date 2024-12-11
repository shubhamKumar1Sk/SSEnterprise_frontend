import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
