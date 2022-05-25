import React from 'react'
import mbs from '../assets/mbs.png'
import nav from '../styles/nav/nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-about'>ABOUT THE PROJECT</div>
        <div className='nav-img'><img src={mbs}/></div>
        <div className='nav-account-cart-container'>
            <div className='nav-account'>Account Cart (0)</div>
        </div>
    </div>
  )
}

export default Nav