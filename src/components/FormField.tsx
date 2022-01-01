import React from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface FieldProps {
  children: React.ReactElement<
    HTMLInputElement & HTMLTextAreaElement & UseFormRegisterReturn
  >
  error?: FieldError
}

const FormField = ({ error, children }: FieldProps) => {
  const label = children.props?.name

  const field = React.cloneElement(children as JSX.Element, {
    className: `form-control${error !== undefined ? ` is-invalid` : ``}`,
    'aria-invalid': error !== undefined,
    'aria-describedby': `error-${label}-required error-${label}-pattern error-${label}-minLength`,
  })

  return (
    <>
      <label className="form-label text-capitalize" htmlFor={label}>
        {label}
      </label>
      {field}
      {error && error.type === `required` && (
        <span
          id={`error-${label}-required`}
          role="alert"
          className="invalid-feedback"
        >
          {error.message || `This is required`}
        </span>
      )}
      {error && error.type === `pattern` && (
        <span
          id={`error-${label}-pattern`}
          role="alert"
          className="invalid-feedback"
        >
          {error.message || `Invalid pattern`}
        </span>
      )}
      {error && error.type === `minLength` && (
        <span
          id={`error-${label}-minLength`}
          role="alert"
          className="invalid-feedback"
        >
          {error.message || `Invalid pattern`}
        </span>
      )}
    </>
  )
}

export default FormField
