import React from 'react'
import message from '../assets/images/message.png'
import homei from '../assets/images/homei.png'
// import twitter from '../assets/images/twitter.png'
// import facebook from '../assets/images/facebook.png'

// import { FaBeer } from 'react-icons/fa';
import { CiTwitter, CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai'
// import { BsChevronDown } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { BsVimeo } from 'react-icons/bs'
 




function Navbar() {
  return (
    <div className='hidden md:bg-[#DA452C] items-center md:flex p-8 text-white px-10 '>
      
<div className='flex   w-full justify-between '>
      
    
      <div className='flex items-center'>
      
        <img className='w-[21px] h-[15px]' src={message} alt="message" />
        
        <span className=' ml-3'> info@nanoqode.com</span>
      </div>

      <div className='items-center flex '>
        <img src={homei} alt="homei" />
        
        
            
        <span className='items-center flex ml-3'>888 sargent ave Winnipeg, Manitoba, R3E 0C7, Canada </span>
        </div>
        
        <div className='flex items-center '>
          <CiTwitter  className='ml-5'/>
          <CiFacebook className='ml-5' />
          <AiOutlineInstagram className='ml-5' />
          <FaYoutube className='ml-5' />
          <BsVimeo className='ml-5' />
          
        </div>
      
      </div>

    </div>
  )
}

export default Navbar
