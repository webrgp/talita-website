import React from 'react'

import "../assets/styles/ContactForm.scss"

const ContactForm: React.FC = () => {
  return (
    <fieldset className="ContactForm">
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
  )
}

export default ContactForm
