import React from "react"
import { FieldError, Path, UseFormRegister } from "react-hook-form"
import { IContactFields } from "../types/IContactFields"

type FieldProps = {
  label: Path<IContactFields>
  register: UseFormRegister<IContactFields>
  required?: boolean
  field: JSX.Element
  error?: FieldError
}

const FormField = ({ label, register, required, field, error }: FieldProps) => {
  const Elem = React.cloneElement(field, {
    className: `form-control${error !== undefined ? " is-invalid" : ""}`,
    "aria-invalid": error !== undefined,
    ...register(label, { required }),
  })

  console.log(error)

  return (
    <>
      <label className="text-capitalize" htmlFor={label}>
        {label}
      </label>
      {Elem}
      <span role="alert" className="invalid-tooltip">
        Required
      </span>
    </>
  )
}

export default FormField
