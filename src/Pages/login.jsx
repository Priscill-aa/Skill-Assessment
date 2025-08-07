import React, { useState } from 'react'
import Image from '../assets/loginImage.svg'
import "../styles/signIn.css"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {
        const [isLoading,setisLoading]=useState(false)
        const [Email,setEmail]=useState('')
        const [Password,setPassword]=useState('')
        const [Logindata,setLogindata] =useState([])
         const url=import.meta.env.VITE_BACKEND_URL
const handleLogin =  async() => {
   setisLoading(true)   
  try {
    const response =  await axios.post(`${url}/login/`, {
        'email' : Email, 
        "password" : Password,
    }, {withCredentials:true}) 

   if(response) {
    const Name= response.data
    toast.success(Name.message)
    console.log(Name)
    setLogindata(Name)
  }
   
  } catch (error) {
        const erroddata = error.response.data
    toast.error(erroddata.message || 'error occured')
    console.log(error)
  }
  finally{setisLoading(false)}
}  
  return (
    <div>
       
      <main className="container">
        <section className="left-panel">
          <h1>Welcome Back</h1>
          <p>Please sign in to continue</p>
          <div className='Form'>
            <label>Email</label>
            <input type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value) } value={Email} required />
            <label>Password</label>
            <input type="password" placeholder="Enter password"  onChange={(event) => setPassword(event.target.value) } value={Password} required />
            <button onClick={handleLogin} type="submit">{isLoading? 'loading...':'Log In'}</button>
            <div className='signup'>
            <p>Don't have an account? </p>
            <Link to={'/SignUp'}>Sign Up</Link>
            </div>
          </div>
        </section>
        <section className="right-panel">
          <img src={Image} alt="loginImage" />
        </section>
      </main>
    </div>  

  )
}

export default Login