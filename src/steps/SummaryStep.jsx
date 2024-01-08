import '../styles/summary.css'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'
import { useSubscription } from '../hooks/useSubscription.js'
import plans from '../plans.json'
import { capitalize } from '../lib/helpers.js'

export default function SummaryStep() {
  const { confirm, subscription, term } = useSubscription()
  const addons = subscription.addons
  const navigate = useNavigate()

  const handleSubmit = () => confirm(() => navigate('/success'))

  const addonsTotal = addons?.map(label => plans.addons[label][term.long]).reduce((a, c) => a + c, 0)
  const planTotal = plans[subscription.selectedPlan][term.long]
  const subtotal = addonsTotal + planTotal

  return (
    <>
      <section className="card" id="summaryCard">
        <h1>Finishing up</h1>
        <p>Double check everything looks okay before confirming.</p>

        <ul id="planTotals" className={addons.length ? 'withAddons' : ''}>
          <li id="heading">
            <div>
              <h2>{plans[subscription.selectedPlan].label} ({capitalize(term.long)})</h2>
              <a href="/#/plan">Change</a>
            </div>
            <strong>${plans[subscription.selectedPlan][term.long]}/{term.short}</strong>
          </li>
          {addons.map((addon, i) => {
            return (<li key={i}>
              <span>{plans.addons[addon].label}</span>
              <span>+${plans.addons[addon][term.long]}/{term.short}</span>
            </li>)
          })}
        </ul>

        <footer>
          <span>Total (per month)</span>
          <strong>+${subtotal}/{term.short}</strong>
        </footer>
      </section>
      <FormButtons onSubmit={handleSubmit} goBack="/#/addons" nextLabel="Confirm" />
    </>
  )
}