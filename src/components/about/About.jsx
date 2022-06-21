import React from 'react';
import './about.css';
import  ME from '../../assets/avatar.jpg';
import {BsAward} from 'react-icons/bs';
const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me_image">
              <img src={ME} alt="About_Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <BsAward className="about__icon" />
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
              <article className='about__card'>
                <BsAward className="about__icon" />
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
              <article className='about__card'>
                <BsAward className="about__icon" />
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consectetur libero rerum ut omnis eaque reprehenderit amet labore tempore, doloremque blanditiis aperiam eos a dolore suscipit doloribus? Placeat, voluptate doloribus.
            </p>
            <a href="#contact"className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About