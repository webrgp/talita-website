import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import '../assets/styles/ServicesSection.scss'

const ServicesSection: React.FC = () => {
  return (
    <section className="ServicesSection">
      <header>
        <h3>Services</h3>
        <p>
          We provide individuals and small to medium-size businesses in all
          industries with quality, affordable, and personalized professional
          services and tax solutions.
        </p>
      </header>

      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-6 col-md-3">
            <StaticImage
              src="../assets/images/translation.jpg"
              quality={100}
              width={720}
              aspectRatio={255 / 283}
              formats={[`auto`, `webp`, `avif`]}
              alt="Translations"
            />
            <h4>Translations</h4>
          </div>
          <div className="col-6 col-md-3">
            <StaticImage
              src="../assets/images/taxes.jpg"
              quality={100}
              width={720}
              aspectRatio={255 / 283}
              formats={[`auto`, `webp`, `avif`]}
              alt="Taxes & Tax Resolutions"
            />
            <h4>Taxes & Tax Resolutions</h4>
          </div>
          <div className="col-6 col-md-3">
            <StaticImage
              src="../assets/images/bookkeping.jpg"
              quality={100}
              width={720}
              aspectRatio={255 / 283}
              formats={[`auto`, `webp`, `avif`]}
              alt="Bookkeeping & Payroll"
            />
            <h4>Bookkeeping & Payroll</h4>
          </div>
          <div className="col-6 col-md-3">
            <StaticImage
              src="../assets/images/consulting.jpg"
              quality={100}
              width={720}
              aspectRatio={255 / 283}
              formats={[`auto`, `webp`, `avif`]}
              alt="Consulting"
            />
            <h4>Consulting</h4>
          </div>
        </div>
      </div>

      <footer>
        <Link className="btn btn-outline-red" to="/services">
          View All Services
        </Link>
      </footer>
    </section>
  )
}

export default ServicesSection
