import React from 'react'
import Slider from '../assets/images/Slider.png'

function Hero() {
  return (
      <div className='bg-[#F5F5F5]  w-full py-20'>
          <div className=''>
              <div>
                  <span className='bg-[#DA452C] border-3 w-[200px] border-4 py-4 '>
                  man 
                  </span>
              </div>
              <div className='inline-block md:flex'>
              <div className='font-bold w-[843px] h-[79px] text-6xl p-8 '>
                  <h1 className='mb-6'>  Grow Your Business,</h1>
                  <h1>Without Limits!</h1>
              </div>
              <div>
              <img src={Slider} alt="Slider" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero
