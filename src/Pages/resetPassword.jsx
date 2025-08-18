import React, { useState, useEffect } from 'react';
import '../styles/resetPassword.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;

  // Fade-in animation
  useEffect(() => {
    const container = document.querySelector('.reset-container');
    container.classList.add('fade-in');
  }, []);



  const handleSubmit = async() =>{
  setsendingEmail(true)
 try {
   const response = await axios.post(`${url}/request_password_reset/`,{
  email:email
  },{withCredentials:true})

  if (response){
    const data= response.data
    toast.success(data.message)
  }

 } catch (error) {
  const errorData= error.response.data 
  console.log(errorData)
 }

 finally{
  setsendingEmail(false)
 }}

  return (
  <div className="reset-container">
    {!submitted ? (
    <>
      <h1 className="title">Reset Password</h1>
      <p className="subtitle">Enter your email to reset your password</p>
      <div>
      <label className="label" htmlFor="email">Email Address</label>
    <input
    className="input"
    type="email"
    id="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required/>


<button onClick={handleSubmit}  className="reset-button" type="submit"> {sendingEmail? 'Please wait...': 'Reset Password'}</button>
    </div>
    </>
    ) : (

    <p className="subtitle">Check your inbox for a password reset link.</p>
    
    )}
    </div>
  );
};

export default ResetPassword;
