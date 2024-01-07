export default function NavItem({ title, path, isActive, isEnabled }) {
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={isEnabled ? path : null}><span>{title}</span></a>
    </li>
  )
}