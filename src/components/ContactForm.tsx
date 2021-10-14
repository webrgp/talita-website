import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import { IContactFields } from "../types/IContactFields"

import "../assets/styles/ContactForm.scss"
import FormField from "./FormField"

const emailValidationRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-12 position-relative">
          <FormField error={errors.name}>
            <input type="text" {...register("name", { required: true })} />
          </FormField>
        </div>
        <div className="col-12 col-md-6 position-relative">
          <FormField error={errors.email}>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: emailValidationRegex,
                  message: "Invalid email address",
                },
              })}
            />
          </FormField>
        </div>
        <div className="col-12 col-md-6 position-relative">
          <FormField error={errors.phone}>
            <input
              type="tel"
              {...register("phone", {
                required: true,
                minLength: {
                  value: 10,
                  message: `Phone number must be at least 10 numbers long`,
                },
              })}
            />
          </FormField>
        </div>
        <div className="col-12 position-relative">
          <FormField error={errors.message}>
            <textarea rows={5} {...register("message", { required: true })} />
          </FormField>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-red">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-muted"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
    </fieldset>
  )
}

export default ContactForm
