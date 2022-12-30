import React from 'react'
import arrowLeft from '../assets/images/arrowLeft.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import arrowRight from '../assets/images/arrowRight.png'



function Partners() {
  return (
    <section className='h-[362px] bg-[#EBF4F6]  items-center'>
          
      <div className=''>
          <h3 className=' text-[#333333] font-semibold lg:font-bold text:2xl lg:text-5xl leading flex w-full justify-center items-center p-8'> Our Partners in Your Success</h3>
      </div>
      
      <div className='bg-[#FFFFFF] rounded-3xl h-[40px] w-[400px] lg:h-[120px] lg:w-[1280px] p-4 ml-8'>
  
      {/*  <div className='scroll-element primary animate-slide'>
      
        
          <img src={image2} alt="" />
          <img src={image3} alt="" />
            <img src={arrowRight} alt="" />
             <div className='scroll-element primary animate-slide'>
          <img className='w-[25px]' src={arrowLeft} alt="arrowLeft" />
       
        </div>

  </div> */}
        
        {/*  <div className='flex space-x-3 '>
          <img className='w-[25px]' src={arrowLeft} alt="arrowLeft" />
          <div className='scroll-element'>
          <img className='' src={image1} alt="" />
          <img className='flex space-x-3' src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
          <img src={arrowRight} alt="" />
        </div> */}
      </div >
          
    </section>
  )
}

export default Partners
