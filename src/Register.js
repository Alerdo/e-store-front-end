import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/authentication/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, address }),
      });
      const data = await response.json();
      if (data.user) {
        alert('Successfully registered!');
        // Navigate to home or login
      } else {
        alert(data.message || 'Failed to register');
      }
    } catch (error) {
      alert('Error during registration: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
