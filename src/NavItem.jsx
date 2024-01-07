export default function NavItem({ title, route, isActive }) {
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={route}><span>{title}</span></a>
    </li>
  )
}