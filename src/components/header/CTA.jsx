import React from 'react'
import Resume from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a className="btn" href={Resume} target="_blank" rel="noreferrer">Download CV</a>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA