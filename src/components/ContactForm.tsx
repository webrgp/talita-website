import React, { useState } from 'react'
import '../assets/styles/ContactForm.scss'
import FormField from './FormField'
import { useFormWithRecaptcha } from '../hooks/useFormWithRecaptcha'

interface IContactFields {
  name: string
  email: string
  phone: string
  message: string
}

const emailValidationRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: IContactFields) => {
    const requestOptions = {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify(data),
    }

    const response = await fetch(
      `${process.env.GATSBY_FORMBUCKET_API_ENDPOINT} `,
      requestOptions,
    )

    if (response.ok) {
      setSubmitted(true)
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      reset()
    }
  }

  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    recaptchaLoaded,
    recaptchaComponent,
    executeRecaptcha,
  } = useFormWithRecaptcha({ onSubmit })

  return (
    <fieldset className="ContactForm">
      {submitted && (
        <div className="alert alert-success" role="alert">
          <strong>Thank you for your message.</strong>
          <br />
          We will get back to you as soon as we can.
        </div>
      )}
      <form
        onSubmit={executeRecaptcha}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-12 position-relative">
          <FormField error={errors.name}>
            <input type="text" {...register(`name`, { required: true })} />
          </FormField>
        </div>
        <div className="col-12 col-md-6 position-relative">
          <FormField error={errors.email}>
            <input
              type="email"
              {...register(`email`, {
                required: true,
                pattern: {
                  value: emailValidationRegex,
                  message: `Invalid email address`,
                },
              })}
            />
          </FormField>
        </div>
        <div className="col-12 col-md-6 position-relative">
          <FormField error={errors.phone}>
            <input
              type="tel"
              {...register(`phone`, {
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
            <textarea rows={5} {...register(`message`, { required: true })} />
          </FormField>
        </div>
        <div className="col-12">{recaptchaComponent}</div>
        <div
          className="col-12"
          aria-disabled={!recaptchaLoaded || isSubmitting}
        >
          <button
            type="submit"
            className="btn btn-red"
            disabled={!recaptchaLoaded || isSubmitting}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-muted"
            onClick={() => reset()}
            disabled={!recaptchaLoaded || isSubmitting}
          >
            Reset
          </button>
        </div>
      </form>
    </fieldset>
  )
}

export default ContactForm
