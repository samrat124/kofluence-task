import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = ({ userData, handleLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  console.log(userData);

  const handleLogout = () => {
    // Perform logout logic (reset user state, etc.)
    handleLogin(false);
    navigate('/');
  };

  return (
    <div className='user-detail-main'>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Password: {showPassword ? userData.password : '******'}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
};

export default UserDetails;
