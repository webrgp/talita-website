import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import { IContactFields } from "../types/IContactFields"

import "../assets/styles/ContactForm.scss"
import FormField from "./FormField"

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFields>()

  const onSubmit: SubmitHandler<IContactFields> = data => console.log(data)

  return (
    <fieldset className="ContactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <FormField
              label="name"
              register={register}
              field={<input />}
              error={errors.name}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <FormField
              label="email"
              register={register}
              field={<input type="email" />}
              error={errors.email}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <FormField
              label="phone"
              register={register}
              field={<input type="tel" />}
              error={errors.phone}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <FormField
              label="message"
              register={register}
              field={<textarea rows={5} />}
              error={errors.message}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-red">
          Submit
        </button>
        <button type="button" className="btn btn-muted" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </fieldset>
  )
}

export default ContactForm
