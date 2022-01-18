import { useState } from 'react'
import { graphql } from 'gatsby'

import '../assets/styles/Testimonials.scss'

interface ITestimonial {
  items?: [any]
}

const Testimonials = ({ items }: ITestimonial) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="Testimonials">
      <header>
        <h3>Testimonials</h3>
      </header>
      <div className="Testimonials--wrapper">
        <div className="Testimonials--quotes">
          {items &&
            items.map((item: any, index: number) => {
              const testimonial = item?.testimonial?.document?.data
              return (
                <div
                  key={`quote-${index}`}
                  className={`Testimonials--quote ${
                    index === activeTestimonial ? `active` : ``
                  }`}
                >
                  <blockquote>
                    {testimonial?.quote?.html && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: testimonial.quote.html,
                        }}
                      />
                    )}
                    <cite>
                      <strong>{testimonial?.cite?.text}</strong>
                      {testimonial?.cite_complement &&
                        testimonial?.cite_complement.length > 0 &&
                        `, ${testimonial.cite_complement.text}`}
                    </cite>
                  </blockquote>
                </div>
              )
            })}
        </div>
        <nav>
          <ul>
            {items &&
              items.map((testimonial: any, index: number) => (
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
}

export default Testimonials

export const query = graphql`
  fragment homepageTestimonials on PrismicHomepageDataBodyTestimonials {
    slice_type
    items {
      testimonial {
        document {
          ... on PrismicTestimonials {
            id
            data {
              cite {
                text
              }
              cite_complement {
                text
              }
              quote {
                html
              }
            }
          }
        }
      }
    }
  }
`
