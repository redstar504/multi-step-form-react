import '../styles/plan.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import pricing from '../pricing.json'

export default function SelectPlanStep({ updateNav }) {
  const existingData = JSON.parse(sessionStorage.getItem('data'))
  const navigate = useNavigate()
  const isUnauthorized = data => !data;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      yearlyTerm: existingData?.yearlyTerm,
      selectedPlan: existingData?.selectedPlan
    }
  })

  useEffect(() => {
    updateNav(1)
  }, [updateNav])

  useEffect(() => {
    if (isUnauthorized(existingData)) {
      navigate("/")
    }
  }, [navigate, existingData])

  const onSubmit = data => {
    // save data
    const existingData = JSON.parse(sessionStorage.getItem('data'))
    const mergedData = { ...existingData, ...data }
    mergedData.completedStep = mergedData.completedStep > 1 ? mergedData.completedStep : 1;
    sessionStorage.setItem('data', JSON.stringify(mergedData))
    // navigate to next step
    navigate('/addons')
  }

  const yearlyTerm = watch('yearlyTerm')
  const term = yearlyTerm ? 'yearly' : 'monthly'
  const label = yearlyTerm ? 'yr' : 'mo'

  return (
    <>
      <section className="card" id="planCard">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <form id="selectPlanForm">
          <fieldset>
            <input {...register('yearlyTerm')} type="checkbox" id="yearlyTerm" />
            <label id="termLengthWrapper" htmlFor="yearlyTerm">
              <span>Monthly</span>
              <i id="termControl"><i></i></i>
              <span>Yearly</span>
            </label>

            {errors.selectedPlan && (<p className="errorMessage">{errors.selectedPlan.message}</p>)}
            <ul id="planOptions">
              <li id="arcade">
                <input
                  {...register('selectedPlan', { required: 'You must choose a plan to proceed.' })}
                  type="radio"
                  id="arcadePlan"
                  name="selectedPlan"
                  value="arcade"
                />
                <label htmlFor="arcadePlan">
                  <h2>Arcade</h2>
                  ${pricing.arcade[term]}/{label}
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="advanced">
                <input
                  {...register('selectedPlan')}
                  type="radio"
                  id="advancedPlan"
                  name="selectedPlan"
                  value="advanced"
                />
                <label htmlFor="advancedPlan">
                  <h2>Advanced</h2>
                  ${pricing.advanced[term]}/{label}
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="pro">
                <input
                  {...register('selectedPlan')}
                  type="radio"
                  id="proPlan"
                  name="selectedPlan"
                  value="pro"
                />
                <label htmlFor="proPlan">
                  <h2>Pro</h2>
                  ${pricing.pro[term]}/{label}
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
            </ul>
          </fieldset>
        </form>
      </section>
      <FormButtons forForm="selectPlanForm" onSubmit={handleSubmit(onSubmit)} goBack="/" />
    </>
  )
}