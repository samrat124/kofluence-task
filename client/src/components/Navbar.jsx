import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
 

const Navbar = ({handleLogin,loggedInUser}) => {
    let navigate=useNavigate()
  return (
    <div className='navbar_Main' >
      
        <Link className='navbar-link' to='/'>Home</Link>
        {loggedInUser?<Link to='/details'>User Details</Link>:<Link   to='/login' >Login</Link>}
        {loggedInUser?<Link to='/login' onClick={(e)=>{
            e.preventDefault();
            handleLogin(false);
            navigate('/')
        }}>Logout</Link>:
        <Link   to='/register'>SignUp</Link>}
    </div>
  )
}

export default Navbar