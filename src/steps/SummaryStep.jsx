import '../styles/summary.css'
import FormButtons from './FormButtons.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import { capitalize } from '../lib/helpers.js'

export default function SummaryStep({updateNav}) {
  const existingData = JSON.parse(sessionStorage.getItem("data"))
  const navigate = useNavigate()
  const isUnauthorized = data => !data || data.completedStep < 2

  useEffect(() => {
    updateNav(3)
  }, [updateNav])

  useEffect(() => {
    if (isUnauthorized(existingData)) {
      return navigate('/addons')
    }
  }, [navigate, existingData])

  const handleSubmit = () => {
    navigate("/success")
  }

  const hasAddons = existingData => ![
    existingData?.largerStorageAddon,
    existingData?.onlineServiceAddon,
    existingData?.onlineServiceAddon,
  ].every(addon => addon === false)

  if (isUnauthorized(existingData)) {
    return null;
  }

  return (
    <>
      <section className="card" id="summaryCard">
        <h1>Finishing up</h1>
        <p>Double check everything looks okay before confirming.</p>

        <ul id="planTotals" className={hasAddons(existingData) ? 'withAddons' : ''}>
          <li id="heading">
            <div>
              <h2>{capitalize(existingData?.selectedPlan)} ({existingData?.yearlyTerm ? 'Annual' : 'Monthly'})</h2>
              <a href="/plan">Change</a>
            </div>
            <strong>$9/mo</strong>
          </li>
          {existingData?.onlineServiceAddon && (
            <li>
              <span>Online service</span>
              <span>+$1/mo</span>
            </li>
          )}
          {existingData?.largerStorageAddon && (
            <li>
              <span>Larger storage</span>
              <span>+$2/mo</span>
            </li>
          )}
          {existingData?.customProfileAddon && (
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