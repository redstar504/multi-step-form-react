import NavItem from './NavItem.jsx'
import { useLocation } from 'react-router-dom'
import { useSubscription } from './context/SubscriptionProvider.jsx'
import steps from './steps.json'

export default function Nav() {
  const {getMaxStep} = useSubscription()
  const location = useLocation()
  const currentPath = location.pathname
  const maxStep = getMaxStep()

  return (
    <ul id="nav">
      {steps.map((step, i) => {
        const isEnabled = maxStep + 1 >= i;
        return (<NavItem key={i} isActive={currentPath === step.path} isEnabled={isEnabled} {...step} />)
      })}
    </ul>
  )
}