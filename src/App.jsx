import Nav from './Nav.jsx'
import steps from './steps.json'
import { Route, Routes } from 'react-router-dom'
import SelectPlanStep from './steps/SelectPlanStep.jsx'
import AddonsStep from './steps/AddonsStep.jsx'
import SummaryStep from './steps/SummaryStep.jsx'
import InfoStep from './steps/InfoStep.jsx'
import { useState } from 'react'
import SuccessStep from './steps/SuccessStep.jsx'

function App() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <>
      <Nav steps={steps} currentStep={currentStep} />
      <Routes>
        <Route
          index
          element={<InfoStep
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/plan"
          element={<SelectPlanStep
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/addons"
          element={<AddonsStep
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/summary"
          element={<SummaryStep
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/success"
          element={<SuccessStep updateNav={step => setCurrentStep(step)} />}
        />
      </Routes>
    </>
  )
}

export default App
