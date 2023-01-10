import React, { useState } from 'react'
import FormField from './FormField'
import { useFormWithRecaptcha } from '../hooks/useFormWithRecaptcha'
import '../assets/styles/ContactForm.scss'

interface IContactFields {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipcode: string
  bestTime: string
}

const emailValidationRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const CreditRepairForm: React.FC = () => {
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
          <FormField error={errors.address}>
            <input type="text" {...register(`address`, { required: true })} />
          </FormField>
        </div>
        <div className="col-12 col-md-6 position-relative">
          <FormField error={errors.city}>
            <input type="text" {...register(`city`, { required: true })} />
          </FormField>
        </div>
        <div className="col-6 col-md-3 position-relative">
          <FormField error={errors.state}>
            <input type="text" {...register(`state`, { required: true })} />
          </FormField>
        </div>
        <div className="col-6 col-md-3 position-relative">
          <FormField error={errors.zipcode}>
            <input type="text" {...register(`zipcode`, { required: true })} />
          </FormField>
        </div>
        <div className="col-12 position-relative">
          <FormField error={errors.bestTime}>
            <select {...register(`bestTime`, { required: true })}>
              <option value="Early Morning">Early Morning</option>
              <option value="Late Morning">Late Morning</option>
              <option value="Early Afternoon">Early Afternoon</option>
              <option value="Late Afternoon">Late Afternoon</option>
            </select>
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

export default CreditRepairForm
