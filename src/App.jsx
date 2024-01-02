import Nav from "./Nav.jsx";
import {useState} from "react";
import StepProcessor from "./StepProcessor.jsx";
import steps from "./steps.jsx";

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const isStepReturnable = (progress, step) => progress >= step;
    const navigateTo = toStep => isStepReturnable(progress, toStep) && setActiveStep(toStep);
    const stepBefore = step => --step;

    return (
        <>
            <Nav
                steps={steps.map(step => step.name)}
                currentStep={activeStep}
                onNavigate={navigateTo}
            />
            {steps[activeStep].component}
            <StepProcessor
                options={steps[activeStep].options}
                onStepBack={() => navigateTo(stepBefore(activeStep))}
            />
        </>
    )
}

export default App
