import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex item-center justify-between gap-4 py-3 mt-20'>
      
      <img src={assets.logo} width={150}/>
      <p className='flex-2 border-l gap-7 border-gray-400 pl-4 text-sm
      text-gray-500 max-sm:hidden'>Copyright @GreatS.dev | All right reserved.</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} width={35}/>
        <img src={assets.twitter_icon} width={35}/>
        <img src={assets.instagram_icon} width={35}/>
      </div>
    </div>
  )
}

export default Footer
