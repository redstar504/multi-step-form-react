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
  const existingData = JSON.parse(sessionStorage.getItem('data'))
  const lastStepCompleted = data => data?.completedStep >= 0 ? data.completedStep : -1;

  return (
    <>
      <Nav steps={steps} currentStep={currentStep} lastStepCompleted={lastStepCompleted(existingData)} />
      <Routes>
        <Route
          index
          element={<InfoStep
            existingData={existingData}
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/plan"
          element={<SelectPlanStep
            existingData={existingData}
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/addons"
          element={<AddonsStep
            existingData={existingData}
            updateNav={step => setCurrentStep(step)}
          />}
        />
        <Route
          path="/summary"
          element={<SummaryStep
            existingData={existingData}
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
