import { useSessionData } from '../hooks/useSessionData.js'
import { createContext, useEffect } from 'react'
import steps from '../../data/steps.json'
import { useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const SubscriptionContext = createContext()

export default function SubscriptionProvider({ children }) {
  const [subscription, setSubscription, resetSubscription, isResetting, setIsResetting] = useSessionData()

  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const requestedStep = steps.indexOf(steps.find(step => step.path === currentPath))
  const maxStep = !subscription ? -1 : subscription.completedStep
  const nextAvailableStep = maxStep + 1
  const hasRequestedFirstStep = requestedStep === 0

  const hasAuthority = hasRequestedFirstStep ||
    isResetting || requestedStep <= nextAvailableStep

  const term = subscription?.yearlyTerm ?
    { long: 'yearly', short: 'yr' } : { long: 'monthly', short: 'mo' }

  const saveStep = (stepNumber, data, callback = f => f) => {
    setIsResetting(false)
    setSubscription(subscription => ({
      ...subscription, ...data, completedStep: Math.max(maxStep, stepNumber),
    }))
    callback()
  }

  const confirm = callback => {
    setSubscription(subscription => ({ ...subscription, completedStep: 3 }))
    callback()
  }

  useEffect(() => {
    if (false === hasAuthority) {
      navigate(steps[nextAvailableStep].path)
    }
  }, [hasAuthority, navigate, nextAvailableStep])

  if (!hasAuthority) {
    return null
  }

  if (!subscription && requestedStep > 0 && requestedStep < 4) {
    return null
  }

  return (
    <SubscriptionContext.Provider
      value={{ subscription, saveStep, nextAvailableStep, resetSubscription, term, confirm }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

SubscriptionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}