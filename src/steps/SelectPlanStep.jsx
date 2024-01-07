import '../styles/plan.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SelectPlanStep({updateNav}) {
  const existingData = JSON.parse(sessionStorage.getItem("data"))

  const {
    register,
    handleSubmit ,
    formState: { errors }
  } = useForm({
    defaultValues: {
      yearlyTerm: existingData?.yearlyTerm,
      selectedPlan: existingData?.selectedPlan,
    }
  })

  useEffect(() => {
    updateNav(1)
  }, [updateNav])

  const navigate = useNavigate()

  const onSubmit = data => {
    // save data
    const existingData = JSON.parse(sessionStorage.getItem('data'))
    const mergedData = {...existingData, ...data};
    sessionStorage.setItem("data", JSON.stringify(mergedData))
    // navigate to next step
    navigate("/addons")
  }


  return (
    <>
      <section className="card" id="planCard">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <form id="selectPlanForm">
          <fieldset>
            <input {...register("yearlyTerm")} type="checkbox" id="yearlyTerm" />
            <label id="termLengthWrapper" htmlFor="yearlyTerm">
              <span>Monthly</span>
              <i id="termControl"><i></i></i>
              <span>Yearly</span>
            </label>
          </fieldset>

          <fieldset>
            {errors.selectedPlan && (<p className="errorMessage">{errors.selectedPlan.message}</p>)}
            <ul id="planOptions">
              <li id="arcade">
                <input
                  {...register("selectedPlan", {required: "You must choose a plan to proceed."})}
                  type="radio"
                  id="arcadePlan"
                  name="selectedPlan"
                  value="arcade"
                />
                <label htmlFor="arcadePlan">
                  <h2>Arcade</h2>
                  $9/mo
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="advanced">
                <input
                  {...register("selectedPlan")}
                  type="radio"
                  id="advancedPlan"
                  name="selectedPlan"
                  value="advanced"
                />
                <label htmlFor="advancedPlan">
                  <h2>Advanced</h2>
                  $12/mo
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="pro">
                <input
                  {...register("selectedPlan")}
                  type="radio"
                  id="proPlan"
                  name="selectedPlan"
                  value="pro"
                />
                <label htmlFor="proPlan">
                  <h2>Pro</h2>
                  $15/mo
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
            </ul>
          </fieldset>
        </form>
      </section>
      <FormButtons forForm="selectPlanForm" onSubmit={handleSubmit(onSubmit)} goBack='/' />
    </>
  )
}