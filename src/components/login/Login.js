import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const baseURL = "https://e-store-backendd-16f7136900ad.herokuapp.com"

const Login = ({setLogIn}) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${baseURL}/authentication/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Important for CORS
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
  
      if (data.success) {
       navigate('/')
        localStorage.setItem('isLoggedIn', true );
      } else {
        alert(data.message || 'Failed to login');
      }
    } catch (error) {
      alert('Error during login: ' + error.message);
    }
  };
  
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit} >
        <label className="login-label">Email: </label>
        <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label className="login-label">Password: </label>
        <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button className="login-button" type="submit" >Login</button>
      </form>
      <p className="login-register-link">Don't have an account? <a href="/register">Click to register</a></p>
    </div>
  );
};

export default Login;
