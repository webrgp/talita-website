import * as React from "react"

import PageHeader from "../components/PageHeader"
import LocationSection from "../components/LocationSection"
import SEO from "../components/SEO"

const ContactPage = () => (
  <article>
    <SEO title="Contact Us" />
    <PageHeader title="Contact Us" />

    <div className="container">
      <div className="card">
        <div className="card-body text-center">
          FORM
        </div>
      </div>
    </div>

    <LocationSection />

  </article>
)

export default ContactPage
