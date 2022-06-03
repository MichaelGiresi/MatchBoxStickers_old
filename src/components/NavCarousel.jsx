import React from 'react'
import Slider from '../scripts/Slider'
import navCarousel from '../styles/navCarousel/navCarousel.css'
import { SliderData } from '../scripts/SliderData'



const NavCarousel = () => {


  return (
    <div className='nav-carousel'>
      {/* <div className='nav-carousel-btn-container'>
        <button className='nav-carousel-buttons' id='carousel__button--prev'>&#60;</button>
      </div> */}
      <Slider slides={SliderData}/>
      {/* <div className='nav-carousel-btn-container'>
        <button className='nav-carousel-buttons' id='carousel__button--next'>&#62;</button>
      </div> */}
    </div>
  )
}

export default NavCarousel
{/* <div className='nav-carousel-slides-container'>
  <div className='nav-carousel-slide1 carousel-item carousel__item--visible'>
  <h6 className='nav-carousel-slide1-title'>HOW IT WORKS</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius culpa atque unde quidem excepturi repudiandae laboriosam in beatae totam!</p>
  
  </div>
  <div className='nav-carousel-slide2 carousel-item carousel__item--hidden'>
    <h6>HOW IT WORKS</h6>
    <p>Each sticker pack contains x stickers. % basic stickers are guarenteed per pack. Each pack has a 1/5 chance of containing an "Elite" sticker.</p>
  </div>
  <div className='nav-carousel-slide3 carousel-item carousel__item--hidden'>
    <h6>THERERO TOURER QURAVO</h6>
    <p>Therero Tourer quravo g f tan at lis m bleay, or, todestie n ff d Whernoveens are; eileay, t th, un pous she by wournthe on: h ath, mithe athisieelislud </p>
  </div>
</div> */}