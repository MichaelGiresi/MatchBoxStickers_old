import React, {useState, useEffect} from 'react'
import mbsSmall from '../assets/mbsSmall.png'
import nav from '../styles/nav/nav.css'

const Nav = () => {
  const [about, setAbout] = useState(true)

  const AboutPage = () => {
    const aboutId = document.getElementById('aboutId')
  
    if(about) {
      setAbout(false)
    } else {
      setAbout(true)
    }

    if(about) {
      aboutId.classList.add('about-page-active')
    } else {
      aboutId.classList.remove('about-page-active')
    }
  }



  return (
    <div className='nav'>
      {/* About Page Start */}
      <div id="aboutId" className='about-page' onClick={() => {AboutPage()}}>
        <div className='about-title'>MATCHBOX STICKERS</div>
        <div className='about-info'>Matchbox Stickers curates arist series sticker drops packaged in a proprietary matchbox.</div>
        <div className='about-how-container'>
          <div className='about-how-title'>HOW'S IT WORK?</div>
          <div className='about-how-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corrupti veniam molestiae quidem, nemo inventore explicabo quo maxime sunt placeat laborum repudiandae vitae consectetur beatae magnam perferendis delectus facilis ratione labore atque? Aliquid, similique! Ducimus nobis, deleniti expedita saepe odio cum fugit doloribus commodi quis dolor eligendi voluptas quas laudantium!</div>
        </div>
      </div>
      {/* About Page End */}
      {/* Nav Start */}
      <div className='nav-container'>
        <div className='nav-about'>
          <div className='nav-about-title' onClick={() => {AboutPage()}}>ABOUT THE PROJECT</div>
        </div>
        <div className='nav-img'><img src={mbsSmall}/></div>
        <div className='nav-account-cart-container'>
          <div className='nav-account'>SHOP ALL</div>
        </div>
      </div>
      {/* Nav End */}
    </div>
  )
}

export default Nav