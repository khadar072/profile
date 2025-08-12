import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import About from '../component/About'
import Contact from '../component/Contact'
import Tech from '../component/Tech'

const Home = () => {
  return (
<div className='px-2 sm:px-[8%] py-4'>
  <Hero/>
  <Services/>
  <About/>
  <Tech/>
  <Contact/>
</div>
  )
}

export default Home
