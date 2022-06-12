import React from 'react'
import Slider from '../scripts/Slider'
import navCarousel from '../styles/navCarousel/navCarousel.css'
import { SliderData } from '../scripts/SliderData'



const NavCarousel = () => {


  return (
    <div className='nav-carousel'>


      <Slider slides={SliderData}/>


    </div>
  )
}

export default NavCarousel
