export default function FormButtons({
  forForm,
  onSubmit,
  goBack = null,
  nextLabel = 'Next Step'
}) {
  return (
    <footer>
      {goBack && <a href={goBack} id="prevStep">Go Back</a>}
      <button id="nextStep" type="submit" form={forForm} onClick={onSubmit}>{nextLabel}</button>
    </footer>
  )
}