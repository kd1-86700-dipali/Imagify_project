import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import './Home.css';

const Navbar = () => {

   const {user,setShowLogin,logout,credit} = useContext(AppContext)

    const navigate=useNavigate()

  return (
    <div className="navbar">
    <Link to="/">
      <img src={assets.logo} alt="" className="logo" />
    </Link>

    <div>
      {user ? (
        <div className="user-section">
          <button onClick={() => navigate('buy')} className="credit-btn">
            <img className="credit-icon" src={assets.credit_star} alt="" />
            <p className="credit-text">Credit Left: {credit}</p>
          </button>

          <p className="username">{user.name}</p>

          <div className="profile-container">
            <img
              width={20}
              src={assets.profile_icon}
              className="profile-icon"
              alt=""
            />
            <div className="dropdown-menu">
              <ul>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="guest-section">
          <p onClick={() => navigate('/buy')} className="pricing-text">
            Pricing
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="login-button"
          >
            Login
          </button>
        </div>
      )}
    </div>
  </div>
);
};

export default Navbar;