import React from 'react';
import foot from '../Footer/img/Footer2.png'
import footer from '../Footer/img/Footer.png'
import face from '../Footer/img/Face.png'
import twitt from '../Footer/img/twitterr.png'
import insta from '../Footer/img/Instag.png'
import './Footer.css'

function Footer() {
  return (
    <div className='foot-container'>
      <div className='foor-footer'>
      < img  className='footer-img'  src={foot}/>
        < img className='footer-image'  src={footer}/>
      </div>
      <div className='footer'>
      <div className='footer-title'>
        <h3>Legal</h3> 
        <p>MSA Self Managel</p>
        <p>Privacy</p>
        <p>CDPR</p>
        <p>Cuidelines for Law Enforcement </p>
        <p>Terms of Servise</p>
        <p>Manage Cookies</p>
      </div>
      <div className='footer-title2'>
      <h3>Product</h3>  
        <p>Why Move ?</p>
        <p>Features</p>
        <p>Omnichannel</p>
        <p>Communite</p>
        <p>Webinars</p>
        <p>MarkerPlace</p>
      </div>
      <div className='footer-title3'>
      <h3>Company</h3>  
        <p>Team</p>
        <p>About</p>
        <p>Joms</p>
        <p>Partners</p>
        <p>Press</p>
        <p>Blog</p>
        <p>Newsletter</p>
      </div>
      </div>
      <div className='images'>
        <img className='img1' src={face}/>
        <img className='img2' src={twitt}/>
        <img className='img3' src={insta}/>
        <h1> in</h1>
      </div>
    </div>
  )
}

export default Footer