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

  const indexOfRequestedStep = steps.indexOf(steps.find(step => step.path === currentPath))
  const maxStep = !subscription ? -1 : subscription.completedStep

  const saveStep = (stepNumber, data) => setSubscription({
    ...subscription, ...data, completedStep: Math.max(maxStep, stepNumber)
  })

  useEffect(() => {
    console.log(`[${currentPath}] Redirecting? ${isAuthorized === false}`)
    if (false === isAuthorized) navigate(steps[maxStep + 1].path)
  }, [location.pathname, isAuthorized, navigate, maxStep])

  useEffect(() => {
    const check = indexOfRequestedStep === 0 || indexOfRequestedStep <= maxStep + 1;
    console.log(`[${currentPath}] Is unauthorized? ${!check}`)
    setIsAuthorized(check)
  }, [location.pathname, indexOfRequestedStep, maxStep])

  const hasAddons = ![
    subscription?.largerStorageAddon,
    subscription?.onlineServiceAddon,
    subscription?.customProfileAddon
  ].every(addon => addon === false)

  if (!isAuthorized) {
    return null;
  }

  if (!subscription && indexOfRequestedStep > 0) {
    return null;
  }

  return (
    <SubscriptionContext.Provider value={{ saveStep, subscription, hasAddons, maxStep, reset, isAuthorized }}>
      {children}
    </SubscriptionContext.Provider>
  )
}