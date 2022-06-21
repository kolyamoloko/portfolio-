import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>kolyamoloko@mail.ru</h5>
            <a href="mailto:kolyamoloko@mail.ru" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>@novikovniki</h5>
            <a href="https://t.me/novikovniki" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+995595887840</h5>
            <a href="https://api.whatsapp.com/send?phone=995595887840" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <form action="">
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" placeholder="Your Message" rows="7" required/>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact