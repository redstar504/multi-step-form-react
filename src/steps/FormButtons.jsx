import { useNavigate } from 'react-router-dom'

export default function FormButtons({
  forForm,
  onSubmit,
  goBack = null,
  nextLabel = 'Next Step'
}) {
  const navigate = useNavigate()

  return (
    <footer>
      {goBack && <a href="#" onClick={() => navigate(goBack)} id="prevStep">Go Back</a>}
      <button id="nextStep" type="submit" form={forForm} onClick={onSubmit}>{nextLabel}</button>
    </footer>
  )
}