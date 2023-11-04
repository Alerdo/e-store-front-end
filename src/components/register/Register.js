import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const herokuDb = "https://api.alerdo-ballabani.co.uk";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${baseURL}/authentication/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify(formData)
      });

      let data = await response.json();

      if (data && data.success) {
        alert('Registration successful!');

        // Automatically login after a successful registration
        response = await fetch(`${baseURL}/authentication/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include this line
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        data = await response.json();

        if (data && data.success) {
          localStorage.setItem('isLoggedIn', true );
          navigate('/');
        } else {
          alert(data.message || 'Failed to login after registration.');
        }
        
      } else {
        alert(data.message || 'Failed to register');
      }
    } catch (error) {
      alert('Error during registration: ' + error.message);
    }
  };

  return (
   
    <div  className="register-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Full Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        
        <button type="submit" className='button'>Register</button>
        
      </form>
    </div>
   
  );
};

export default Register;
