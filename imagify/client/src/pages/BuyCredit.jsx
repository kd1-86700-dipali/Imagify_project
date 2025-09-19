import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import './credit.css';
import { AppContext } from '../context/AppContext';

const BuyCredit = () => {

const{user}=useContext(AppContext)

  return (
    <div className='plans-container'>
  <button className='plans-button'>Our plans</button>
  <h1 className='plans-title'>Choose the plan</h1>

  <div className='plans-cards-container'>
    {plans.map((item, index) => (
      <div key={index} className='plan-card'>
        <img src={assets.logo_icon} alt="Plan Logo" />
        <p className='plan-id'>{item.id}</p>
        <p className='plan-desc'>{item.desc}</p>
        <p className='plan-price'>
          <span className='price-amount'>${item.price}</span> / {item.credits} credits

        </p>
        <button className='w-full bg-gray-800 text-white mt-8
        text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' :'Get Started'}</button>
      </div>
    ))}
  </div>
</div>

  )
}

export default BuyCredit
