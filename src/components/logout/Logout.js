
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = "https://api.alerdo-ballabani.co.uk";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch(`${baseURL}/authentication/logout`, {
          credentials: 'include',
        });

        if (response.status === 200) {
          localStorage.setItem('isLoggedIn', false );;  // Remove the client-side state
          navigate('/login');  // Redirect to home page
        } else {
          const data = await response.json();
          alert('Failed to logout: ' + data.message);
        }

      } catch (error) {
        alert('An error occurred while trying to logout: ' + error.message);
        console.log(error)
      }
    };

    logout();
  }, []);

  return <div>Logging you out...</div>;
};

export default Logout;

