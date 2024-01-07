import Nav from './Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import SelectPlanStep from './steps/SelectPlanStep.jsx'
import AddonsStep from './steps/AddonsStep.jsx'
import SummaryStep from './steps/SummaryStep.jsx'
import InfoStep from './steps/InfoStep.jsx'
import SuccessStep from './steps/SuccessStep.jsx'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<InfoStep />} />
        <Route path="/plan" element={<SelectPlanStep />} />
        <Route path="/addons" element={<AddonsStep />} />
        <Route path="/summary" element={<SummaryStep />} />
        <Route path="/success" element={<SuccessStep />} />
      </Routes>
    </>
  )
}

export default App
