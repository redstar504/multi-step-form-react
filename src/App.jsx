import Nav from './Nav.jsx'
import StepProcessor from './StepProcessor.jsx'
import steps from './steps.jsx'
import { Route, Routes } from 'react-router-dom'
import SelectPlanStep from './steps/SelectPlanStep.jsx'
import AddonsStep from './steps/AddonsStep.jsx'
import SummaryStep from './steps/SummaryStep.jsx'
import InfoStep from './steps/InfoStep.jsx'

function App() {
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
      <StepProcessor />
    </>
  )
}

export default App
