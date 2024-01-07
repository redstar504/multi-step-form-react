import { useSessionData } from '../hooks/useSessionData.js'
import { createContext, useContext, useState } from 'react'

const SubscriptionContext = createContext()

export function SubscriptionProvider({ children }) {
  const [subscription, setSubscription, reset] = useSessionData()

  const saveStep = (stepNumber, data) => setSubscription({
    ...subscription, ...data, completedStep: Math.max(getMaxStep(), stepNumber) })

  const hasAddons = ![
    subscription?.largerStorageAddon,
    subscription?.onlineServiceAddon,
    subscription?.customProfileAddon,
  ].every(addon => addon === false)

  function getMaxStep() {
    if (!subscription) return -1
    return subscription.completedStep;
  }

  return (
    <SubscriptionContext.Provider value={{saveStep, subscription, hasAddons, getMaxStep, reset}}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export const useSubscription = () => useContext(SubscriptionContext)