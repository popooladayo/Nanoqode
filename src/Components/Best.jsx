import React from 'react'
import { Services } from '../data/staticData'
import Cards from '../Components/Cards'

const style = {
  wrapper: 'w-full my-9 items-center h-[400px] w-full bg-white flex flex-col justify-center',
  textSmall: 'text-sm font-bold text-black'
}

function Best() {
  return (
      <div className={style.wrapper}>
        <p className={style.textSmall}>Services</p>        
        <h3 className='text-3xl font-bold border-b-[#DA452C] border-b-4'>What we do best</h3>
        {/* image */}
        <div className='grid grid-cols-1  md:grid-cols-4  gap-1 mt-16 justify-around  space-y-4 items-center '>
            {Services.map((item, i) => (
             <div className='hover:bg-[#DA452C] min-h-[240px] min-w-[240px] my-7 flex-col items-center  justify-center hover:scale-y-125 duration-300 transition-all ease-in bg-[#5AA6B1] px-8 py-4'>
              <div className='bg-white rounded-full flex items-center my-7 mx-auto p-4 h-16 w-16'>
              <img className='object-contain h-[26.5px] w-[26.5px] ' src={item.image} />
              </div>
              <span className='text-2xl font-extrabold w-full  font-inter text-white flex text-center mx-9'>{item.text}</span>
             </div>
            ))}
        </div>
    </div>
  ) 
}

export default Best
