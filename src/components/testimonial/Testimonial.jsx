import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';

export const Testimonial = () => {
  return (
    <section id="testimonial">
      ghbdtn
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis quod a consequuntur, hic consectetur perspiciatis, voluptatum sit ullam in modi praesentium distinctio eos eveniet doloremque aperiam voluptates eligendi reiciendis.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis quod a consequuntur, hic consectetur perspiciatis, voluptatum sit ullam in modi praesentium distinctio eos eveniet doloremque aperiam voluptates eligendi reiciendis.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis quod a consequuntur, hic consectetur perspiciatis, voluptatum sit ullam in modi praesentium distinctio eos eveniet doloremque aperiam voluptates eligendi reiciendis.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial
