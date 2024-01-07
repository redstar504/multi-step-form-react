import NavItem from './NavItem.jsx'

export default function Nav({ steps, currentStep, lastStepCompleted}) {
  return (
    <ul id="nav">
      {steps.map((step, i) => (
        <NavItem key={i} isActive={currentStep === i} isEnabled={lastStepCompleted + 1 >= i} {...step} />
      ))}
    </ul>
  )
}