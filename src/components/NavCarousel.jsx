import React, { useEffect } from 'react'
import navCarousel from '../styles/navCarousel/navCarousel.css'
// import navCarouselScript from '../scripts/navCarouselScript'


const NavCarousel = () => {

  // useEffect(() => {
  // const slidesContainer = document.getElementsByClassName('nav-carousel-slides-container')
  // const slideOne = document.getElementsByClassName('nav-carousel-slide1')
  // const slideTwo = document.getElementsByClassName('nav-carousel-slide2')
  // const slideThree = document.getElementsByClassName('nav-carousel-slide3')
  // const buttons = document.getElementsByClassName('nav-carousel-buttons')
  
  // buttons[0].addEventListener('click', function(){

  // })
   
  // })
  return (
    <div className='nav-carousel'>
      <div className='nav-carousel-btn-container'>
        <button className='nav-carousel-buttons' id='nav-carousel-btn-left'>&#60;</button>
      </div>
      <div className='nav-carousel-slides-container'>
        <div className='nav-carousel-slide1'>
        <h6 className=''>HOW IT WORKS</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius culpa atque unde quidem excepturi repudiandae laboriosam in beatae totam!</p>
        
        </div>
        <div className='nav-carousel-slide2'>
          <h6>HOW IT WORKS</h6>
          <p>Each sticker pack contains x stickers. % basic stickers are guarenteed per pack. Each pack has a 1/5 chance of containing an "Elite" sticker.</p>
        </div>
        <div className='nav-carousel-slide3'>
          <h6>THERERO TOURER QURAVO</h6>
          <p>Therero Tourer quravo g f tan at lis m bleay, or, todestie n ff d Whernoveens are; eileay, t th, un pous she by wournthe on: h ath, mithe athisieelislud </p>
        </div>
      </div>
      <div className='nav-carousel-btn-container'>
        <button className='nav-carousel-buttons' id='nav-carousel-btn-right'>&#62;</button>
      </div>
    </div>
  )
}

export default NavCarousel