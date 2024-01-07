import { useSessionData } from '../hooks/useSessionData.js'
import { createContext, useEffect, useState } from 'react'
import steps from '../steps.json'
import { useLocation, useNavigate } from 'react-router-dom'

export const SubscriptionContext = createContext()

export default function SubscriptionProvider({ children }) {
  const [subscription, setSubscription, reset] = useSessionData()
  const [isAuthorized, setIsAuthorized] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const requestedStep = steps.indexOf(steps.find(step => step.path === currentPath))
  const maxStep = !subscription ? -1 : subscription.completedStep
  const nextAvailableStep = maxStep + 1
  const hasRequestedFirstStep = requestedStep === 0;

  const term = subscription?.yearlyTerm ?
    { long: "yearly", short: "yr" } : {long: "monthly", short: "mo"}

  const saveStep = (stepNumber, data, callback = f => f) => {
    setSubscription({
      ...subscription, ...data, completedStep: Math.max(maxStep, stepNumber)
    })
    callback()
  }

  useEffect(() => {
    if (false === isAuthorized) navigate(steps[nextAvailableStep].path)
  }, [isAuthorized, navigate, nextAvailableStep])

  useEffect(() => {
    const isAuthorized = hasRequestedFirstStep || requestedStep <= nextAvailableStep;
    setIsAuthorized(isAuthorized)
  }, [requestedStep, nextAvailableStep, hasRequestedFirstStep])

  if (!isAuthorized) {
    return null;
  }

  if (!subscription && requestedStep > 0) {
    return null;
  }

  return (
    <SubscriptionContext.Provider value={{ subscription, saveStep, nextAvailableStep, reset, term }}>
      {children}
    </SubscriptionContext.Provider>
  )
}