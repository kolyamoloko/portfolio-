import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>Choto</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>
            </li>
          </ul>
        </article>
        {/* services */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>
            </li>
          </ul>
        </article>
        {/* END ui ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>  
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>    
            </li>
            <li>
              <BiCheck className="service__list-icon" />     
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe nemo suscipit sapiente commodi nobis aspernatur perspiciatis hic vitae illum molestiae deleniti, culpa exercitationem aliquid laboriosam explicabo aperiam iure dignissimos?
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services