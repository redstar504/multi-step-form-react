import '../styles/plan.css'

export default function SelectPlanStep() {
  return (
    <section className="card" id="planCard">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <article>
        <input type="checkbox" id="termLength" />
        <label id="termLengthWrapper" htmlFor="termLength">
          <span>Monthly</span>
          <i id="termControl"><i></i></i>
          <span>Yearly</span>
        </label>

        <ul id="planOptions">
          <li id="arcade">
            <a href="#">
              <h2>Arcade</h2>
              $9/mo
              <small className="annualOffer">2 months free</small>
            </a>
          </li>
          <li id="advanced">
            <a href="#">
              <h2>Advanced</h2>
              $12/mo
              <small className="annualOffer">2 months free</small>
            </a>
          </li>
          <li id="pro">
            <a href="#">
              <h2>Pro</h2>
              $15/mo
              <small className="annualOffer">2 months free</small>
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}