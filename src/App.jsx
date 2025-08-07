import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import Login from './Pages/login';
import SignUp from './Pages/signUp';
import PageRoute from './Routes/Pageroute';
import {ToastContainer,Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Refresh from './Services/Api';


function App() {
  const url=import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    const get_auth = async () => {
      const response = await fetch(`${url}/get_authentication/`, {
        method:"GET",
        credentials:"include"
      })

      console.log(response)
    
        console.log(response.status)

         if (response.status==401) {
           await Refresh()
          }
          
        }
      


    get_auth()
  })
  return (
    <>

      <PageRoute/>
      <ToastContainer
position="top-center"
autoClose={4000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    </>
    
    
  );
}

export default App;
