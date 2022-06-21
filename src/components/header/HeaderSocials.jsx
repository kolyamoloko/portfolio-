import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mikalai-novikau-6a0824224/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/kolyamoloko" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.codewars.com/users/kolyamoloko" target="_blank" rel="noreferrer"><SiCodewars /></a>
    </div>
  )
}

export default HeaderSocials