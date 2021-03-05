import React, { useState } from 'react'

import "../assets/styles/Testimonials.scss"

import testimonialData from "../data/testimonials.json"

const Testimonials: React.FC = () => {

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { testimonials } = testimonialData
  console.log(testimonials);
  return (
    <section className="Testimonials">
      <header>
        <h3>Testimonials</h3>
      </header>
      <div className="Testimonials--wrapper">
        <div className="Testimonials--quotes">
          {testimonials && testimonials.map( (testimonial: any, index: number) => (
            <div
              key={`quote-${index}`}
              className={`Testimonials--quote ${index === activeTestimonial ? 'active' : ''}`}
            >
              <blockquote>
                <p>{testimonial.quote}</p>
                <cite>{testimonial.cite}</cite>
              </blockquote>
            </div>
          ))}
        </div>
        <nav>
          <ul>
            {testimonials && testimonials.map( (testimonial: any, index: number) => (
              <li key={`nav-btn-${index}`} className={index === activeTestimonial ? 'active' : ''}>
                <button
                  onClick={() => setActiveTestimonial(index)}
                >{index}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Testimonials
