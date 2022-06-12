import React, {useState, useEffect, useRef } from 'react'
import hero from '../styles/hero/hero.css'
import VideoPlayer from '../scripts/videoPlayer'
import video from '../assets/video.mp4'
// import HeroVideoButtons from '../scripts/HeroVideoButtons'
const Hero = () => {

  const videoElement = useRef(null)
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    heroButtonOneTime,
    heroButtonTwoTime,
    heroButtonThreeTime,
    heroButtonFourTime,
    heroButtonFiveTime,
    heroButtonSixTime,

  } = VideoPlayer(videoElement)


useEffect(() => {

  
  if(Hero) {
    console.log(videoElement.current.currentTime)
    const id1 = document.getElementById('btn1')
    const id2 = document.getElementById('btn2')
    const id3 = document.getElementById('btn3')
    const id4 = document.getElementById('btn4')
    const id5 = document.getElementById('btn5')
    const id6 = document.getElementById('btn6')

    if((videoElement.current.currentTime <= 49.9999))  {
      id1.classList.add('border-select')
    } else {
      id1.classList.remove('border-select')
    }
    if(videoElement.current.currentTime >= 50 && videoElement.current.currentTime <= 99.9999) {
      id2.classList.add('border-select')
    } else {
      id2.classList.remove('border-select')
    }
    if(videoElement.current.currentTime >= 100 && videoElement.current.currentTime <= 149.9999) {
      id3.classList.add('border-select')
    } else {
      id3.classList.remove('border-select')
    }
    if(videoElement.current.currentTime >= 150 && videoElement.current.currentTime <= 199.9999) {
      id4.classList.add('border-select')
    } else {
      id4.classList.remove('border-select')
    }
    if(videoElement.current.currentTime >= 200 && videoElement.current.currentTime <= 249.9999) {
      id5.classList.add('border-select')
    } else {
      id5.classList.remove('border-select')
    }
    if(videoElement.current.currentTime >= 250 ) {
      id6.classList.add('border-select')
    } else {
      id6.classList.remove('border-select')
    }
  }
})
  
  
  return (
    <div className='hero'>
      {/* <div className='hero-top'>1</div> */}
      <div className="hero-container">

        

        <div className='hero-video-buttons-container'>

          <div className='hero-buttons-video-container'>

            <div className='hero-button-container'>

              <div className='hero-button-container-2'>

                <button id='btn1' className='hero-button-1 ' onClick={heroButtonOneTime}></button>
                <button id='btn2' className='hero-button-2' onClick={heroButtonTwoTime} ></button>
                <button id="btn3" className='hero-button-3' onClick={heroButtonThreeTime}></button>
                <button id="btn4" className='hero-button-4' onClick={heroButtonFourTime}></button>
                <button id="btn5" className='hero-button-5' onClick={heroButtonFiveTime}></button>
                <button id="btn6" className='hero-button-6' onClick={heroButtonSixTime}></button>

              </div>

            </div>
            
            <div className='hero-video-container'>

              <video 
                className="video"
                src={video} 
                ref={videoElement}
                onClick={togglePlay}
                onTimeUpdate={handleOnTimeUpdate}
                muted
                autoPlay
                loop
              />

              <div className='video-controls'>

                <input 
                className="video-slider"
                type='range' 
                min="0"
                max="100"
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
                />

                <select
                className="video-speed-select"
                value={playerState.speed}
                onChange= {(e) => handleVideoSpeed(e)}
                >

                <option value="0.50">0.50</option>
                <option value="1">1</option>
                <option value="1.25">1.25</option>
                <option value="2">2</option>

                </select>

                <button className="video-mute-toggle" onClick={toggleMute}>Mute</button>

              </div>

            </div>

          </div>

        </div>

        <div className='hero-drop-info-container'>

          <div className='hero-drop-info-container2'>
      
            <div className='hero-drop-into-title'>DROP #1</div>
            <h1 className='hero-drop-title'>WHATEVER WEATHER</h1>
            <p id='hero-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button id='hero-button'>ADD TO CART <sup className='sup-dollar'>$</sup>12.00</button>

            <div className="remaining__remainingProgressBar">                
              <h6 id="remaining">21 <span className='remaining-span'>of 100</span> Remaining</h6>
              <div id="remainingProgressBar"></div>
              <div id="remainingProgressBarStatus"></div>
            </div>



          </div>

        </div>

      </div>
      <div className='hero-bottom'>
      <div className="countdown">
              <h6 id="countdown__nextDrop">NEXT DROP</h6>
              <h5 id="countdown__dropTitle">CLASSIC<br/> CARS</h5>
              <h5 id="countdown__timeRemaining">JULY 1<sup className='sup'>ST</sup></h5>
            </div>
      </div>

    </div>

  )

}

export default Hero
