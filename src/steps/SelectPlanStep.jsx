import '../styles/plan.css'
import FormButtons from './FormButtons.jsx'

export default function SelectPlanStep() {
  return (
    <>
      <section className="card" id="planCard">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <form id="selectPlanForm">
          <fieldset>
            <input type="checkbox" id="termLength" />
            <label id="termLengthWrapper" htmlFor="termLength">
              <span>Monthly</span>
              <i id="termControl"><i></i></i>
              <span>Yearly</span>
            </label>
          </fieldset>

          <fieldset>
            <ul id="planOptions">
              <li id="arcade">
                <input type="radio" id="arcadePlan" name="selectedPlan" />
                <label htmlFor="arcadePlan">
                  <h2>Arcade</h2>
                  $9/mo
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="advanced">
                <input type="radio" id="advancedPlan" name="selectedPlan" />
                <label htmlFor="advancedPlan">
                  <h2>Advanced</h2>
                  $12/mo
                  <small className="annualOffer">2 months free</small>
                </label>
              </li>
              <li id="pro">
                <input type="radio" id="proPlan" name="selectedPlan" />
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
      <FormButtons forForm="selectPlanForm" />
    </>
  )
}