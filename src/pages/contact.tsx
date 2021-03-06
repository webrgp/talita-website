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
          <ContactForm />
        </div>
      </div>
    </div>

    <LocationSection />

  </article>
)

export default ContactPage
