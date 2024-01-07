import NavItem from './NavItem.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSubscription } from './context/SubscriptionProvider.jsx'
import steps from './steps.json'
import { useEffect } from 'react'

export default function Nav() {
  const {getMaxStep} = useSubscription()
  const location = useLocation()
  const currentPath = location.pathname
  const maxStep = getMaxStep()
  const navigate = useNavigate();


  useEffect(() => {
    const indexOfRequestedStep = steps.indexOf(steps.find(step => step.path === currentPath))

    if (indexOfRequestedStep > 0 && indexOfRequestedStep > maxStep + 1) {
      navigate(steps[indexOfRequestedStep - 1].path)
    }
  }, [navigate, maxStep, currentPath])

  return (
    <ul id="nav">
      {steps.map((step, i) => {
        const isEnabled = maxStep + 1 >= i;
        return (<NavItem key={i} isActive={currentPath === step.path} isEnabled={isEnabled} {...step} />)
      })}
    </ul>
  )
}