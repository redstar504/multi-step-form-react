import '../styles/summary.css'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'
import { capitalize } from '../lib/helpers.js'
import { useSubscription } from '../hooks/useSubscription.js'

export default function SummaryStep() {
  const { subscription, hasAddons } = useSubscription()
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/success')
  }

  return (
    <>
      <section className="card" id="summaryCard">
        <h1>Finishing up</h1>
        <p>Double check everything looks okay before confirming.</p>

        <ul id="planTotals" className={hasAddons ? 'withAddons' : ''}>
          <li id="heading">
            <div>
              <h2>
                {`${capitalize(subscription.selectedPlan)} 
                (${subscription.yearlyTerm ? 'Annual' : 'Monthly'})`}</h2>
              <a href="/plan">Change</a>
            </div>
            <strong>$9/mo</strong>
          </li>
          {subscription.onlineServiceAddon && (
            <li>
              <span>Online service</span>
              <span>+$1/mo</span>
            </li>
          )}
          {subscription.largerStorageAddon && (
            <li>
              <span>Larger storage</span>
              <span>+$2/mo</span>
            </li>
          )}
          {subscription.customProfileAddon && (
            <li>
              <span>Customizable profile</span>
              <span>+$2/mo</span>
            </li>
          )}
        </ul>

        <footer>
          <span>Total (per month)</span>
          <strong>+$12/mo</strong>
        </footer>
      </section>
      <FormButtons onSubmit={handleSubmit} goBack="/addons" />
    </>
  )
}