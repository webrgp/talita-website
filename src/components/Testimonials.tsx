import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/styles/Testimonials.scss'

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <StaticQuery
      query={graphql`
        query Testimonials {
          allPrismicTestimonials {
            edges {
              node {
                data {
                  cite {
                    text
                  }
                  quote {
                    text
                  }
                  cite_complement {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const testimonials = data.allPrismicTestimonials.edges

        return (
          <section className="Testimonials">
            <header>
              <h3>Testimonials</h3>
            </header>
            <div className="Testimonials--wrapper">
              <div className="Testimonials--quotes">
                {testimonials &&
                  testimonials.map((n: any, index: number) => {
                    const { node } = n
                    const testimonial = node.data
                    return (
                      <div
                        key={`quote-${index}`}
                        className={`Testimonials--quote ${
                          index === activeTestimonial ? `active` : ``
                        }`}
                      >
                        <blockquote>
                          <p>{testimonial.quote.text}</p>
                          <cite>
                            <strong>{testimonial.cite.text}</strong>
                            {testimonial.cite_complement &&
                              testimonial.cite_complement.length > 0 &&
                              `, ${testimonial.cite_complement.text}`}
                          </cite>
                        </blockquote>
                      </div>
                    )
                  })}
              </div>
              <nav>
                <ul>
                  {testimonials &&
                    testimonials.map((testimonial: any, index: number) => (
                      <li
                        key={`nav-btn-${index}`}
                        className={index === activeTestimonial ? `active` : ``}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveTestimonial(index)}
                        >
                          {index}
                        </button>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Testimonials
