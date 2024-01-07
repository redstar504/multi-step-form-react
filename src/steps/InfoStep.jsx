import { useForm } from 'react-hook-form'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'

export default function InfoStep() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    // save the data
    console.log(data)
    // navigate to next step
    navigate("/plan")
  }

  console.log(errors)

  return (
    <>
      <section className="card" id="infoForm">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form id="personalInfo">
          <fieldset>
            <label htmlFor="fullName" className={errors.fullName ? 'error' : ''}>
              Name
              <strong>{errors.fullName?.message}</strong>
            </label>
            <input
              {...register('fullName', { required: 'A full name is required' })}
              name="fullName"
              id="fullName"
              className="textInput"
              placeholder="e.g. Stephen King"
            />
            <label htmlFor="emailAddress" className={errors.emailAddress ? 'error' : ''}>
              Email Address
              <strong>{errors.emailAddress?.message}</strong>
            </label>
            <input
              {...register('emailAddress', { required: 'Please enter your email address' })}
              type="email"
              name="emailAddress"
              id="emailAddress"
              className="textInput"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label htmlFor="phoneNumber" className={errors.phoneNumber ? 'error' : ''}>
              Phone Number
              <strong>{errors.phoneNumber?.message}</strong>
            </label>
            <input
              {...register('phoneNumber', { required: 'Please provide a ten digit phone number' })}
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="textInput"
              placeholder="e.g. 255-755-6585"
            />
          </fieldset>
        </form>
      </section>
    <FormButtons forForm="infoForm" onSubmit={handleSubmit(onSubmit)} />
    </>
  )
}