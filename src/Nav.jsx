import PropTypes from "prop-types";
import NavItem from "./NavItem.jsx";

export default function Nav({steps, currentStep, onNavigate}) {

    return (
        <ul id="nav">
            {steps.map((step, i) => (
                <NavItem key={i} active={i === currentStep} title={steps[i]} onClick={() => onNavigate(i)} />
            ))}
        </ul>
    );
}

Nav.propTypes = {
    steps: PropTypes.array,
    currentStep: PropTypes.number,
    onNavigate: PropTypes.func,
};