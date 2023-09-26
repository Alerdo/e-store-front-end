import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    address: ''
  });

  const [updateData, setUpdateData] = useState({
    email: '',
    name: '',
    address: ''
  });

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Assuming you set this during login

  useEffect(() => {


 
    if (!isLoggedIn) {
      alert("You need to login to acces your profile.");
      navigate('/login'); // Redirect them to the login page
      return;
    }
    const fetchProfile = async () => {
        try {
          const response = await fetch('http://localhost:3001/user/profile', {
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
          
          console.log(data)
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
    fetchProfile();
  }, [setUserData]);

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
        credentials: 'include',
      });
      const data = await response.json();
      if (data.message === 'Profile updated successfully') {
        setUserData(data.user);
        alert('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();
      if (data === 'User deleted successfully') {
        navigate('/login');  // Redirect to home page
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };


  const logout = async  () => {
    try {
      const response = await fetch('http://localhost:3001/authentication/logout', {
          method: 'POST',  
          credentials: 'include',
      });


      if (response) {
        localStorage.removeItem('isLoggedIn');  // Remove the client-side state
        navigate('/login');  // Redirect to home page
        console.log(response)
      } else {
        const data = await response.json();
        alert('Failed to logout: ' + data.message);
      }

    } catch (error) {
      alert('An error occurred while trying to logout: ' + error.message);
      console.log(error)
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

