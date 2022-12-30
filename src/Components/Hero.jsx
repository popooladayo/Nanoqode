import React from 'react'
import Carous from './Carous'

import Intro from './Intro'


function Hero() {
  return (
 <section className='flex flex-col lg:flex-row'>
<div className='lg:basis-1/2'>
  <Intro/>
</div>
<div className='lg:basis-1/2'>
    <Carous />
</div >
</section >
  )
}

export default Hero
