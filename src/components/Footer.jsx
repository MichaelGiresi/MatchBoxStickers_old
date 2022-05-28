import React from 'react'
import footer from '../styles/footer/footer.css'
import mbsSmall from '../assets/mbsSmall.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>

      <div className='footer-mbs-container'><img className='footer-mbs' src={mbsSmall}/></div>
      <div className='footer-shop-container'>
        <div>SHOP</div>
        <div>DROPS</div>
        <div>MERCH</div>
        <div>ALL</div>
      </div>
      <div className='footer-about-container'>
        <div>ABOUT</div>
        <div>ABOUT</div>
        <div>PRIVACY POLICY</div>
        <div>TERMS & CONDITIONS</div>
        <div>CONTACT US</div>
      </div>
      <div className='footer-social-container'>
        <div>SOCIAL</div>
        
      </div>
      </div>
    </div>
  )
}

export default Footer