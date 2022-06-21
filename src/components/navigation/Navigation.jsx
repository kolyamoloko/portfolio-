import React from 'react';
import './navigation.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {MdMiscellaneousServices} from 'react-icons/md';
import {IoMdContact} from 'react-icons/io';
import {useState} from 'react';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BsBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <MdMiscellaneousServices />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <IoMdContact />
      </a>
    </nav>
  )
}

export default Navigation