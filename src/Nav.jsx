import NavItem from './NavItem.jsx'
import { useLocation } from 'react-router-dom'
import steps from '../data/steps.json'
import { useSubscription } from './hooks/useSubscription.js'

export default function Nav() {
  const { nextAvailableStep } = useSubscription()
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <ul id="nav">
      {steps.map((step, i) =>
        !step.hide && (
          <NavItem
            key={i}
            isActive={currentPath === step.path}
            isEnabled={nextAvailableStep >= i}
            {...step}
          />
        ))}
    </ul>
  )
}