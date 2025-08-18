import React, { useState } from 'react';
import Image from '../assets/loginImage.svg';
import '../styles/signIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${url}/login/`,
        { email: Email, password: Password },
        { withCredentials: true }
      );

      if (response) {
        toast.success(response.data.message);
        setTimeout(()=> {
          location.reload()

        },2000)
      }
    } catch (error) {
      const errorData = error.response?.data || {};
      toast.error(errorData.message || 'Error occurred');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="Logincontainer">
      <section className="left-panel">
        <h1>Welcome Back</h1>
  
        <div className="Form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            required
          />

          <button
            onClick={handleLogin}
            type="button"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Log In'}
          </button>

          <div style={{display:"flex",justifyContent:"space-between"}} className="signup">
            <Link style={{textDecoration:"none"}} to="/signUp"> Don't have an account? Sign Up  </Link> 
           
            <Link style={{textDecoration:"none"}}to="/resetPassword" >Reset Password</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
