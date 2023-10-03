import React, { useState, useEffect, useRef } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './Profile.css';

const baseURL = "https://e-store-backendd-16f7136900ad.herokuapp.com/"

const Profile = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    address: ''
  });

  const [updateData, setUpdateData] = useState({
    email: '',
    name: '',
    address:  ''
  });

  const navigate = useNavigate();

  // const isLoggedIn = localStorage.getItem('isLoggedIn'); // Assuming you set this during login
  // const hasShownAlert = useRef(false);

  useEffect(() => {

    const fetchProfile = async () => {
        try {
          const response = await fetch(`${baseURL}user/profile`, {
            credentials: 'include',
          });
          const data = await response.json();
          setUserData({
            email: data.email || '',
            name: data.name || '',
            address: data.address || ''
          });
          setUpdateData({
            email: data.email || '',
            name: data.name || '',
            address: data.address || ''
          });

          
          
          if (data.message) {
            alert(data.message)
            navigate('/login');
            return;
          }
          
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
    fetchProfile();
  }, []);



  const handleUpdate = async () => {
    try {
      const response = await fetch(`${baseURL}user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
        credentials: 'include',
      });
      const data = await response.json();
      if (data.message === 'Profile updated successfully') {
        // Set the updated data to userData state
        setUserData({
          email: updateData.email,
          name: updateData.name,
          address: updateData.address
        });

        alert('Profile updated successfully');
   
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseURL}user/profile`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data)
      if (data.message === 'User deleted successfully') {
        alert(data.message)
        navigate('/login');  // Redirect to home page
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };


  const logout = async () => {
    try {
      const response = await fetch(`${baseURL}authentication/logout`, {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await response.json(); // Fixed line
  
      if (data.success) {
        localStorage.setItem('isLoggedIn', 'false');  // Set client-side state to logged out
        navigate('/login');  // Redirect to home page
        console.log(response);
      } else {
        alert('Failed to logout: ' + data.message);
      }
  
    } catch (error) {
      alert('An error occurred while trying to logout: ' + error.message);
      console.log(error);
    }
  };
  

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <p>Address: {userData.address}</p>
      </div>
      <div className="profile-update">
        <input type="text" placeholder="New Email" value={updateData.email} onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })} />
        <input type="text" placeholder="New Name" value={updateData.name} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} />
        <input type="text" placeholder="New Address" value={updateData.address} onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })} />
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
      <div className="profile-delete">
        <button onClick={handleDelete}>Delete Profile</button>
      </div>

      <div className="logout">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;

