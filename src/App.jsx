import Nav from "./Nav.jsx";
import {useEffect, useReducer, useState} from "react";
import StepProcessor from "./StepProcessor.jsx";
import steps from "./steps.jsx";

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isNextStepEnabled, setIsNextStepEnabled] = useState(false);
    const navigateTo = toStep => {
        if (toStep < activeStep && progress >= toStep) {
            setActiveStep(toStep);
            setIsNextStepEnabled(true);
        } else if (toStep > activeStep && isNextStepEnabled) {
            setProgress(progress => progress + 1);
            setActiveStep(step => step + 1);
            setIsNextStepEnabled(false);
        }
    }
    const stepBefore = step => --step;

    const CurrentStep = steps[activeStep].component;

    const emptyReport = {
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        planType: "",
        planLength: ""
    };

    const [report, updateReport] = useReducer(
        (user, newDetails) => ({ ...user, ...newDetails }),
        emptyReport
    );

    const enableNextStep = (decision) => {
        setIsNextStepEnabled(decision);
    }

    return (
        <>
            <Nav
                steps={steps.map(step => step.name)}
                currentStep={activeStep}
                onNavigate={navigateTo}
            />
            <CurrentStep report={report} updateReport={updateReport} enableNextStep={enableNextStep} />
            <StepProcessor
                options={steps[activeStep].options}
                onStepBack={() => navigateTo(stepBefore(activeStep))}
                onNextStep={() => navigateTo(activeStep + 1)}
                nextStepEnabled={isNextStepEnabled}
            />
        </>
    )
}

export default App
