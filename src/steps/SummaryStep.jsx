import '../styles/summary.css'
import FormButtons from './FormButtons.jsx'

export default function SummaryStep() {
  return (
    <>
      <section className="card" id="summaryCard">
        <h1>Finishing up</h1>
        <p>Double check everything looks okay before confirming.</p>

        <ul id="planTotals">
          <li id="heading">
            <div>
              <h2>Arcade (Monthly)</h2>
              <a href="#">Change</a>
            </div>
            <strong>$9/mo</strong>
          </li>
          <li>
            <span>Online service</span>
            <span>+$1/mo</span>
          </li>
          <li>
            <span>Larger storage</span>
            <span>+$2/mo</span>
          </li>
        </ul>

        <footer>
          <span>Total (per month)</span>
          <strong>+$12/mo</strong>
        </footer>
      </section>
      <FormButtons forForm="" />
    </>
  )
}