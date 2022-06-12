import React from 'react'
import mbsSmall from '../assets/mbsSmall.png'
import nav from '../styles/nav/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-about'>
          <div className='nav-about-title'>ABOUT THE PROJECT</div>
          </div>
        <div className='nav-img'><img src={mbsSmall}/></div>

        <div className='nav-account-cart-container'>
            <div className='nav-account'>SHOP ALL</div>
        </div>
    </div>
    </div>
  )
}

export default Nav