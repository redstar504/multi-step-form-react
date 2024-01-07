import { useForm } from 'react-hook-form'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key))
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))


export default function InfoStep({updateNav}) {
  const existingData = JSON.parse(sessionStorage.getItem("data"))

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: existingData?.fullName,
      emailAddress: existingData?.emailAddress,
      phoneNumber: existingData?.phoneNumber,
    }
  })

  useEffect(() => {
    updateNav(0)
  }, [updateNav])

  const navigate = useNavigate()

  const onSubmit = (data) => {
    // save data
    const existingData = JSON.parse(sessionStorage.getItem('data'))
    const mergedData = {...existingData, ...data};
    mergedData.completedStep = mergedData.completedStep > 0 ? mergedData.completedStep : 0;
    sessionStorage.setItem("data", JSON.stringify(mergedData))

    // navigate to next step
    navigate("/plan")
  }

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
              {...register('emailAddress', { required: 'Enter your email address' })}
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
              {...register('phoneNumber', { required: 'Enter a ten digit phone number' })}
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