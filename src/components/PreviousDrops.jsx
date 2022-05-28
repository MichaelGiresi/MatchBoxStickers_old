import React from 'react'
import previousdrops from '../styles/previousDrops/previousDrops.css'

const PreviousDrops = () => {
  return (
    <div className='previousdrops'>
      <div className='previousdrops-text-container'>
        <h4>PREVIOUS DROPS</h4>
        <h6>Get them before they're gone!</h6>
      </div>
      <div className='previousdrops-carousel'>
        <div className='previousdrops-carousel-slides-container'>
          <div className='previousdrops-carousel-slide1-container'></div>
          <div className='previousdrops-carousel-slide2-container'></div>
          <div className='previousdrops-carousel-slide3-container'></div>
          <div className='previousdrops-carousel-slide4-container'></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='previousdrops-carousel-nav-container'>
          <div className='previousdrops-carousel-nav-line-container'>
            <div></div>
            <div></div>
          </div>
          <div className='previousdrops-carousel-nav-button-container'>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousDrops