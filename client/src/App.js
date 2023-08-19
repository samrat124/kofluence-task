import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import UserDetails from './components/UserDetails';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [userData,setUserData]=useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    age: '',
    address: '',
    gender: '',
    occupation: ''
  });

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };
  const handleUserData=(data)=>{
    setUserData(data)
  }

  
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar handleLogin={handleLogin} loggedInUser={loggedInUser}/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login handleLogin={handleLogin} handleUserData={handleUserData} loggedInUser={loggedInUser}/>}/>
        
        <Route path='/register' element={<Registration/>}/>
        <Route path='/details' element={<UserDetails userData={userData} handleLogin={handleLogin}/>}/>
       </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
