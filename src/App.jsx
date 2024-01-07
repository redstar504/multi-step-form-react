import Nav from './Nav.jsx'
import FormButtons from './steps/FormButtons.jsx'
import steps from './steps.json'
import { Route, Routes } from 'react-router-dom'
import SelectPlanStep from './steps/SelectPlanStep.jsx'
import AddonsStep from './steps/AddonsStep.jsx'
import SummaryStep from './steps/SummaryStep.jsx'
import InfoStep from './steps/InfoStep.jsx'
import { useState } from 'react'

function App() {
  const [step, setStep] = useState('personalInfo')

  return (
    <>
      <Nav steps={steps} />
      <Routes>
        <Route
          index
          element={<InfoStep />}
        />
        <Route
          path="/plan"
          element={<SelectPlanStep />}
        />
        <Route
          path="/addons"
          element={<AddonsStep />}
        />
        <Route
          path="/summary"
          element={<SummaryStep />}
        />
      </Routes>
    </>
  )
}

export default App
