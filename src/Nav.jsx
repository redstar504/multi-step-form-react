import NavItem from './NavItem.jsx'

export default function Nav({ steps }) {
  console.log(steps)
  return (
    <ul id="nav">
      {steps.map((step, i) => (
        <NavItem key={i} {...step} />
      ))}
    </ul>
  )
}