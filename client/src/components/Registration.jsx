import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        age: '',
        address: '',
        gender: '',
        occupation: ''
      });
      let navigate=useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Perform validation and registration logic here
        try {
            const response = await fetch('http://localhost:3001/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            if (response.ok) {
              navigate('/login');
            } else {
              console.error('Registration failed.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        console.log('Form data submitted:', formData);
      };
    
      return (
        <div className="App">
          <div className="registration-container">
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
              <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
             
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
  );
};

export default Registration;
