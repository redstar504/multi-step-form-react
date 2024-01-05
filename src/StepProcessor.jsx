import PropTypes from "prop-types";

export default function StepProcessor({options, onStepBack, onNextStep, nextStepEnabled}) {
    const defaultOptions = {
        prevStep: true,
        nextStepLabel: "Next Step",
    };

    const ops = {...defaultOptions, ...options};

    return (
        <footer>
            {ops.prevStep && (<a href="#" onClick={onStepBack} id="prevStep">Go Back</a>)}
            <button id="nextStep" disabled={!nextStepEnabled} onClick={onNextStep}>{ops.nextStepLabel || 'Next Step'}</button>
        </footer>
    );
}

StepProcessor.propTypes = {
    options: PropTypes.object,
    onStepBack: PropTypes.func,
};