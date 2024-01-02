import PropTypes from "prop-types";

export default function StepProcessor({options, onStepBack}) {
    const defaultOptions = {
        prevStep: true,
        nextStepLabel: "Next Step",
    };

    const ops = {...defaultOptions, ...options};

    return (
        <footer>
            {ops.prevStep && (<a href="#" onClick={onStepBack} id="prevStep">Go Back</a>)}
            <a href="#" id="nextStep">{ops.nextStepLabel || 'Next Step'}</a>
        </footer>
    );
}

StepProcessor.propTypes = {
    options: PropTypes.object,
    onStepBack: PropTypes.func,
};