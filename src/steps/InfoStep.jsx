import { useForm } from 'react-hook-form'

export default function InfoStep() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  console.log(errors)

  return (
    <section className="card" id="personalInfoCard">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form id="personalInfo" onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
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
  )
}