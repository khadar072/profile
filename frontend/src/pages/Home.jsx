import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import About from '../component/About'
import Contact from '../component/Contact'
import Tech from '../component/Tech'

const Home = () => {
  return (
<div className='px-1 dark:bg-gray-900 dark:text-white  md:px-[8%] py-6 sm:py-4'>
  <Hero/>
  <Services/>
  <About/>
  <Tech/>
  <Contact/>
</div>
  )
}

export default Home
