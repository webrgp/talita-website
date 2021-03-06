import * as React from "react"

import PageHeader from "../components/PageHeader"
import LocationSection from "../components/LocationSection"
import SEO from "../components/SEO"

const ContactPage = () => (
  <article>
    <SEO title="Contact Us" />
    <PageHeader title="Contact Us" />

    <div className="container-fluid container-lg">
      <div className="row justify-content-center">
        <div className="col col-md-10">
          <fieldset>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="message">Message</label>
                  <textarea rows={5} className="form-control" id="message" />
                </div>
              </div>
              <button type="submit" className="btn btn-red">Submit</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>

    <LocationSection />

  </article>
)

export default ContactPage
