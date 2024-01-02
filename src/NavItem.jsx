import PropTypes from "prop-types";

export default function NavItem({title, active, onClick}) {
    return (
        <li className={active ? "active" : ""}>
            <a href="#" onClick={onClick}><span>{title}</span></a>
        </li>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
};