import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useRecaptcha } from 'react-hook-recaptcha'

const recaptchaContainerId = 'recaptcha-container'

export const useFormWithRecaptcha = ({ onSubmit, ...formConfig }) => {
  const formMethods = useForm(formConfig)
  const onSubmitRef = useRef(onSubmit)
  const formMethodsRef = useRef(formMethods)

  useEffect(() => {
    onSubmitRef.current = onSubmit
    formMethodsRef.current = formMethods
  })

  const successCallback = (response) => {
    return formMethodsRef.current.handleSubmit((data) => {
      // add recaptcha field to data
      return onSubmitRef.current({ ...data, 'g-recaptcha-response': response })
    })()
  }

  const { recaptchaLoaded, recaptchaWidget } = useRecaptcha({
    containerId: recaptchaContainerId,
    sitekey: process.env.GATSBY_RECAPTCHA_SITE_KEY,
    size: 'invisible',
    successCallback,
  })

  const executeRecaptcha = (e) => {
    e.preventDefault()
    if (recaptchaWidget !== null) {
      window.grecaptcha.reset(recaptchaWidget)
      window.grecaptcha.execute(recaptchaWidget)
    }
  }

  const resetRecaptcha = () => {
    if (recaptchaWidget !== null) {
      window.grecaptcha.reset(recaptchaWidget)
    }
  }

  const recaptchaComponent = <div id={recaptchaContainerId} />

  return {
    ...formMethods,
    recaptchaLoaded,
    recaptchaComponent,
    executeRecaptcha,
    resetRecaptcha,
  }
}
