import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import "../assets/styles/ContactForm.scss"

type Inputs = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  console.log(errors)

  return (
    <fieldset className="ContactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" {...register("phone")} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea
              rows={5}
              className="form-control"
              {...register("message")}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-red">
          Submit
        </button>
      </form>
    </fieldset>
  )
}

export default ContactForm
