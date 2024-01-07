import NavItem from './NavItem.jsx'

export default function Nav({ steps, currentStep }) {
  return (
    <ul id="nav">
      {steps.map((step, i) => (
        <NavItem key={i} isActive={currentStep === i} {...step} />
      ))}
    </ul>
  )
}