import '../styles/plan.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import pricing from '../pricing.json'
import { useSessionData } from '../hooks/useSessionData.js'
import { useSubscription } from '../context/SubscriptionProvider.jsx'

export default function SelectPlanStep({ updateNav }) {
  const {saveStep, subscription} = useSubscription()
  const [isCompleted, setIsCompleted] = useState(false)
  const navigate = useNavigate()
  const isUnauthorized = data => !data;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      yearlyTerm: subscription?.yearlyTerm,
      selectedPlan: subscription?.selectedPlan
    }
  })

  /*useEffect(() => {
    if (isUnauthorized(data)) {
      navigate("/")
    }
  }, [navigate, data])*/

  useEffect(() => {
    if (!isCompleted) return
    // nav to next step on completion
    navigate("/addons")
  }, [navigate, isCompleted])

  const onSubmit = data => {
    saveStep(1, data)
    setIsCompleted(true)
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