import React from 'react'
import { assets } from '../assets/assets'
import './Btn.css';

const GenerateBtn = () => {
  return (
    <div className="container">
  <h1 className="heading">See the magic. Try Now.</h1>
  <button className="generate-btn">
    <img  src={assets.star_group} alt="" className="star-icon" />
    Generate Images
  </button>
</div>

  )
}

export default GenerateBtn
