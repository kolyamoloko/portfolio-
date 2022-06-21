import React from 'react';
import './portfolio.css';
/* import IMG1 from '../../assets/portfolio1.jpg'; */
import IMG2 from '../../assets/porfolio2.jpg';
import IMG3 from '../../assets/porfolio3.jpg';
import IMG4 from '../../assets/porfolio4Memslider.jpg';
import IMG5 from '../../assets/porfolio5.jpg';
import IMG6 from '../../assets/porfolio6.jpg';
import IMG7 from '../../assets/porfolio7.png';

const data = [
  {
      id: 1,
      image: IMG4,
      title: 'Slider (CSS)',
      github: 'https://github.com/kolyamoloko/cssMemSlider',
      demo: 'https://kolyamoloko.github.io/cssMemSlider/cssMemSlider/index.html'
  },
  {
      id: 2,
      image: IMG2,
      title: 'Todo(JS,CSS, HTML)',
      github: 'https://github.com/kolyamoloko/clean-code-s1e1/tree/clean-code-s1e1',
      demo: ''
  },
  {
      id: 3,
      image: IMG3,
      title: 'Art Quiz (JS, html, sass) ',
      github: 'https://github.com/rolling-scopes-school/kolyamoloko-JSFE2021Q3/tree/art-quiz',
      demo: 'https://ecstatic-einstein-666e71.netlify.app/'
  },
  {
      id: 4,
      image: IMG5,
      title: 'Louvre (Javascript, html, css)',
      github: 'https://github.com/rolling-scopes-school/kolyamoloko-JSFE2021Q3/pull/2',
      demo: 'https://rolling-scopes-school.github.io/kolyamoloko-JSFE2021Q3/museum'
  },
  {
      id: 5,
      image: IMG6,
      title: 'Drum-kit (JS, HTML, CSS',
      github: 'https://github.com/rolling-scopes-school/kolyamoloko-JSFEPRESCHOOL/pull/5',
      demo: 'https://rolling-scopes-school.github.io/kolyamoloko-JSFEPRESCHOOL/drum-kit/'
  },
  {
      id: 6,
      image: IMG7,
      title: '3400 lessons for english(React, scss, webpack, mongoDB, REST Api)',
      github: 'https://github.com/darya-kun/rslang',
      demo: 'https://rslang-darya-kun.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="portfolio__header">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
              </div>
            </article>
          )})
        }
      </div>
    </section>
  )
}

export default Portfolio