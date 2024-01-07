import { useContext } from 'react'
import { SubscriptionContext } from '../context/SubscriptionProvider.jsx'

export const useSubscription = () => useContext(SubscriptionContext)