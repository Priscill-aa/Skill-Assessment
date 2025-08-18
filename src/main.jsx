import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // if any
import Usercontextprovider from './context/usercontextprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usercontextprovider>
     <BrowserRouter>
      <App />
    </BrowserRouter> 
    </Usercontextprovider>
  </React.StrictMode>
);
