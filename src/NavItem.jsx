export default function NavItem({ title, route, isActive, isEnabled }) {
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={isEnabled ? route : null}><span>{title}</span></a>
    </li>
  )
}