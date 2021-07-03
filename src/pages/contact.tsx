import * as React from "react"

import PageHeader from "../components/PageHeader"
import LocationSection from "../components/LocationSection"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <article>
    <SEO title="Contact Us" />
    <PageHeader title="Contact Us" />

    <div className="container-fluid container-lg">
      <div className="row justify-content-center">
        <div className="col col-md-10">
          <p>We provide individuals and small to medium-size businesses in all industries with quality, affordable, and personalized professional services and tax solutions. Contact us today!</p>
          <ContactForm />
        </div>
      </div>
    </div>

    <LocationSection />

  </article>
)

export default ContactPage
