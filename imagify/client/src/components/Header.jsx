import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import './Home.css';
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()

const onClickHandler =()=>{
  if(user){
    navigate('/result')
  }else{
    setShowLogin(true)
  }

}


  return (
    <motion.div className="home-wrapper  position: fixed;" 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 ,y:0}}
    viewport={{oncence:true}}
    >
    <motion.div className="tagline-box"
    initial={{opacity:0, y:-20}}
    whileInView={{opacity:1 ,y:0}}
    transition={{delay:0.2,duration:0.8}}

    
    
    >
      <p className="tagline-text">
        Best text to <span className="highlight">image</span> generator
      </p>
      <img src={assets.star_icon} alt='' className="star-icon" />
    </motion.div>

    <h2 className="main-heading">
      Turn text to image, in seconds.
    </h2>

    <p className="subheading">
      Unleash your creativity with AI. Turn your imagination
      into visual art in seconds – just type, and watch the magic
      happen.
    </p>

    <button onClick={onClickHandler} className="generate-button">
      Generate Images
      <img className="generate-icon" src={assets.star_group} alt='' />
    </button>

    <div className="image-gallery" width={20}>
      {Array(3).fill('').map((item, index) => (
        <img
          className="sample-image"
          src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
          alt=''
          key={index}
          width={70}
        />
      ))}
    </div>

    <p className="footer-note">Generated images from imagify</p>
  </motion.div>
  )
}

export default Header
