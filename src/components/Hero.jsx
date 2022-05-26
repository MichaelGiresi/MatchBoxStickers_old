import React from 'react'
import hero from '../styles/hero/hero.css'
import BigSur from '../assets/BigSur.mp4'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-button-container'>
        <button className='hero-button-1'>1</button>
        <button className='hero-button-2'>2</button>
        <button className='hero-button-3'>3</button>
        <button className='hero-button-4'>4</button>
        <button className='hero-button-5'>5</button>
        <button className='hero-button-6'>6</button>
      </div>
      <div className='hero-video-container'>
        <video id="videoid"
                    controls 
                    src={BigSur}
                    autoPlay 
                    muted
                    loop></video>
      </div>
      <div className='hero-drop-info-container'>
        <div>DROP #1</div>
        <h1>FRUIT ON FURNITURE</h1>
        <p id='hero-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <br/>
        <br/>
        <br/>
        <button id='hero-button'>ADD TO CART $12.00</button>
        <div className="remaining__remainingProgressBar">                
                    <h6 id="remaining">20 of 100 REMAINING</h6>
                    <div id="remainingProgressBar"></div>
                    <div id="remainingProgressBarStatus"></div>
                </div>
                <div className="countdown">
                    <h6 id="countdown__nextDrop">NEXT DROP</h6>
                    <h5 id="countdown__dropTitle">CARS ARE PEOPLE TOO</h5>
                    <h5 id="countdown__timeRemaining">5D 14 HR 25 MIN</h5>
                </div>
      </div>

    </div>
  )
}

export default Hero