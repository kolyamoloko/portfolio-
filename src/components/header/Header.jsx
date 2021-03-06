import React from 'react'
import './header.css';
import CTA from './CTA';
import avatar1 from '../../assets/avatar1.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Novikau Mikalai</h1>
         <h5 className="text-light">
           Front-end Developer
         </h5>
         <CTA />
         <HeaderSocials />
         <div className="me">
           <img src={avatar1} alt="MyPhoto" />
         </div>
         <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header