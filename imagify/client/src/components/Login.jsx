import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import './Home.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state ,setState]=useState('Login')
const{setShowLogin, backendUrl,setToken,setUser} = useContext(AppContext);

const [name,setName] =useState('')
const [email,setEmail] =useState('')
const [password,setPassword] =useState('')

const onSubmitHandler = async(e)=>{
  e.preventDefault();
  try {
    if(state ==='Login'){
     const {data} =await axios.post(backendUrl + '/api/user/login',{email,password})
     if(data.success){
      setToken(data.token)
      setUser(data.user)

      localStorage.setItem('token',data.token)
      setShowLogin(false)

     }else{
      toast.error(data.message)

      
     }


    }else{
      const {data} =await axios.post(backendUrl + '/api/user/register',{name,email,password})
      if(data.success){
       setToken(data.token)
       setUser(data.user)
 
       localStorage.setItem('token',data.token)
       setShowLogin(false)

    }else{
      toast.error(data.message)

      
     }

  } 
  } catch (error) {
    toast.error(error.message)

    
  }
}

useEffect(()=>{
    document.body.style.overflow='hidden';

    return()=>{
        document.body.style.overflow='unset';
    }
},[])

  return (
    <div className="form-overlay">
  <form onSubmit={onSubmitHandler} className="form-box">
    <h1 className="form-title">{state}</h1>
    <p className="form-subtitle">Welcome back! Please sign in to continue</p>

    {state !== 'Login' && (
      <div className="input-group">
        <img src={assets.profile_icon} width={20} />
        <input onChange={e=>setName(e.target.value)} value={name} type="text" className="input-field" placeholder="Full Name" required />
      </div>
    )}

    <div className="input-group">
      <img src={assets.email_icon} width={15} />
      <input onChange={e=>setEmail(e.target.value)} value={email} type="email" className="input-field" placeholder="Email Id" required />
    </div>

    <div className="input-group">
      <img src={assets.lock_icon} width={15} />
      <input onChange={e=>setPassword(e.target.value)} value={password} type="password" className="input-field" placeholder="Password" required />
    </div>

    <p className="forgot-password">Forgot password?</p>

    <button className="form-button">
      {state === 'Login' ? 'Login' : 'Create Account'}
    </button>

    {state === 'Login' ? (
      <p className="form-footer">
        Don't have an account?{' '}
        <span className="link-text" onClick={() => setState('Sign Up')}>
          Sign up
        </span>
      </p>
    ) : (
      <p className="form-footer">
        Already have an account?{' '}
        <span className="link-text" onClick={() => setState('Login')}>
          Login
        </span>
      </p>
    )}

    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className="close-icon" alt="Close" />
  </form>
</div>

  )
}

export default Login
