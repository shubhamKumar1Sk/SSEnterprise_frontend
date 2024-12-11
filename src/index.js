import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <ToastContainer />
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
