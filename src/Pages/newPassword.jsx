import React, { useState,useEffect } from 'react';
import '../styles/newPassword.css'; 
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';



const NewPassword = () => {
const url = import.meta.env.VITE_BACKEND_URL;
const [searchParams] =useSearchParams() 
const [passwordData, setpasswordData] =useState({
  password:'' , confirmPassword: '' 
}
)

// Fade-in animation part
  useEffect(() => {
    const container = document.querySelector('.newPasswordcontainer');
    container.classList.add('fade-in');
  }, []);

const [isLoadingPassword ,setisLoadingPassword] =useState(false)
const uid=searchParams.get('uid')
const token=searchParams.get('token')
const changePassword = async() =>{
  setisLoadingPassword(true)
 try {
   const response = await axios.post(`${url}/reset_password_request/`,{
  uid:uid,
  token:token,
  newPassword:passwordData.password,
  confirmPassword:passwordData.confirmPassword
  },{withCredentials:true})

  if (response){
    const data= response.data
    console.log(data)
  }

 } catch (error) {
  const errorData= error.response.data 
  console.log(errorData)
 }

 finally{
  setisLoadingPassword(false)
 }

}
  return (

 <div className="newPasswordcontainer">
   <h1>Create New Password</h1>
   <p className="subtitle">
   Your new password must be different from previous used passwords
   </p>
   <div>
   <label htmlFor="password">Password</label>

<input onChange={(e)=>setpasswordData((prevData)=> ({...prevData,password:e.target.value}))} value={passwordData.password} type="password" id="password" placeholder="Password" required />
   <p className="hint">Must be at least 8 characters</p>
   <label htmlFor="confirm-password">Confirm Password</label>
   <input onChange={(e)=>setpasswordData((prevData)=> ({...prevData,confirmPassword:e.target.value}))} value={passwordData.confirmPassword} type="password" id="confirm-password" placeholder="Confirm Password" required />
   <p className="hint">Both passwords must match</p>
  <button onClick={changePassword} className="reset-btn" type="submit"> {isLoadingPassword ? 'Please wait...' :'Reset Password'}</button>
  </div>
</div>
  );
};

export default NewPassword;
