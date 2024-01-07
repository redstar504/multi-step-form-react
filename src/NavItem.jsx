export default function NavItem({ title, route }) {
  return (
    <li>
      <a href={route}><span>{title}</span></a>
    </li>
  )
}