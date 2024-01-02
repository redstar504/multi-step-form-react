import Nav from "./Nav.jsx";
import {useState} from "react";
import InfoStep from "./steps/InfoStep.jsx";
import SelectPlanStep from "./steps/SelectPlanStep.jsx";
import AddonsStep from "./steps/AddonsStep.jsx";
import SummaryStep from "./steps/SummaryStep.jsx";

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(2);
    const isStepReturnable = (progress, step) => progress >= step;
    const onNavigate = toStep => isStepReturnable(progress, toStep) && setActiveStep(toStep);

    const steps = [
        {
            name: "Your Info",
            component: <InfoStep  />
        },
        {
            name: "Select Plan",
            component: <SelectPlanStep />
        },
        {
            name: "Add-ons",
            component: <AddonsStep />
        },
        {
            name: "Summary",
            component: <SummaryStep />
        }
    ]

  return (
    <>
      <Nav
          steps={steps.map(step => step.name)}
          currentStep={activeStep}
          onNavigate={onNavigate}
      />
      {steps[activeStep].component}
    </>
  )
}

export default App
