import React from 'react'
import nanoqode from '../assets/images/nanoqode.svg'
import { BsChevronCompactDown } from 'react-icons/bs'

function Navbars() {
  return (
      <div className='h-[100px] bg-[#E9E9E9]  w-screen justify-between items-center flex'>
          
              <div className=' '>
          <img className='p-4' src={nanoqode} alt="nanoqode" />
              </div>

              <ul className='hidden  lg:flex'>
              <li className='text-[#DA452C]'> Home</li>
              <li className=' flex'> Website  <span className='p-2'> < BsChevronCompactDown />  </span> </li>   
              <li className='flex'>Marketing <span className='p-2'> < BsChevronCompactDown />  </span></li>
              <li> Telephony</li>
              <li>Hosting</li>
                  <li> Blog</li>
                  <li> About</li>
          </ul>
          
          <div className='mr-9'>
              <span className='hidden lg:flex bg-[#5AA6B1] lg:px-[24px] py-[12px] lg:text-white '>+1 (800) 361-2961 </span>
          </div>
          
    </div>
  )
}

export default Navbars
