import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({handleLogin,loggedInUser,handleUserData}) => {
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
      });
      const navigate=useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();
            const user = users.find(
              (u) =>
                (u.email === formData.identifier  ) &&
                u.password === formData.password
            );
             handleUserData(user);
             
            if (user) {
               handleLogin(true);
              navigate('/');
            } else {
              alert('Invalid credentials.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        console.log('Form data submitted:', formData);
      };
    
      return (
        <div className="App">
          <div className="login-container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
               
              <input
                type="text"
                name="identifier"
                placeholder="Email or Mobile Number"
                value={formData.identifier}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
               
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
  );
};

export default Login;
