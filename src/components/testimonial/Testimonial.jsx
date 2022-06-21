import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Санек',
    review: 'К'
  },
  {
    avatar: AVTR2,
    name: 'Санек',
    review: 'К'
  },  
  {
    avatar: AVTR3,
    name: 'Санек',
    review: 'К'
  },  
  {
    avatar: AVTR4,
    name: 'Санек',
    review: 'К'
  },
  {
    avatar: AVTR5,
    name: 'Nastya',
    review: 'Nastya'
  }
]

export const Testimonial = () => {
  return (
    <section id="testimonial">
      ghbdtn
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}) => {
            return (
              <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonial
