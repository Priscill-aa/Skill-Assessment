import React, { useState } from 'react';
import Laptop from '../assets/Laptop.svg';
import "../styles/signUp.css";
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: '', 
  });
   
  const url=import.meta.env.VITE_BACKEND_URL
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setFormData({...formData, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setMessage('Passwords do not match.');
      return;
    }

try {
 const response = await fetch(`${url}/register/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
          'Content-Type': 'application/json',
            },
    body: JSON.stringify({
    username: formData.username,
    first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    password: formData.password,
    password2: formData.confirm_password,
  }),
     

});

const data = await response.json();

 if (response.ok) {
    setMessage('Registration successful. Please log in.');
    } else {
            setMessage(data.message || 'Registration failed.');
          }
        } catch (error) {
          setMessage('Error connecting to server.');
        }
  };

  return (
  <div>
  <div className="container">
  <div className="left-panel">
 <h2>Join Skill Checker</h2>
  <form onSubmit={handleSubmit}>
  <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} required />
  <input name="first_name" type="text" placeholder="First name" value={formData.first_name} onChange={handleChange} required />
  <input name="last_name" type="text" placeholder="Last name" value={formData.last_name} onChange={handleChange} required />
  <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
   <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
  <input name="confirm_password" type="password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} required />

            

   <button type="submit" className="submit-btn">Sign Up</button>
    {message && <p className="form-message">{message}</p>}
     </form>

  <div className='signIn'>
 <p>Already have an account?</p>
  <Link to={'/login'}>Log In</Link>
 </div>
 </div>

<div className="right-panel">
 <img src={Laptop} alt="Laptop" />
 <div className="overlay-text">
 <h2>Join Skill Checker</h2>
<p>Let's get you set up in minutes.</p>
 </div>
 </div>
</div>
 </div>
  );
}

export default SignUp;
