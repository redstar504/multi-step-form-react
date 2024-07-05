import PropTypes from 'prop-types'

export default function NavItem({ title, path, isActive, isEnabled }) {
  return (
    <li className={isActive ? 'active' : ''}>
      <a href={isEnabled ? `/multi-step-form-react/#${path}` : null}><span>{title}</span></a>
    </li>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isEnabled: PropTypes.bool.isRequired
}