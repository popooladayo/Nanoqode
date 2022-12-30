import React from 'react'
import Navbar from '../Components/Navbar'
import Navbars from '../Components/Navbars'
import Hero from '../Components/Hero'
import Partners from '../Components/Partners'
import Best from '../Components/Best'


function HomePage() {
  return (
    <div>
          <Navbar />
          <Navbars />
      <Hero />
      <Partners />
    <Best/>

    </div>
  )
}

export default HomePage
