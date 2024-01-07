import '../styles/summary.css'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { capitalize } from '../lib/helpers.js'
import { useSubscription } from '../context/SubscriptionProvider.jsx'

export default function SummaryStep({updateNav}) {
  const { subscription, hasAddons } = useSubscription()
  console.log('has addons', hasAddons)
  const navigate = useNavigate()
  const isUnauthorized = data => !data || data.completedStep < 2

  useEffect(() => {
    if (isUnauthorized(subscription)) {
      return navigate('/addons')
    }
  }, [navigate, subscription])

  const handleSubmit = () => {
    navigate("/success")
  }

  if (isUnauthorized(subscription)) {
    return null;
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
      <FormButtons onSubmit={handleSubmit} goBack='/addons' />
    </>
  )
}