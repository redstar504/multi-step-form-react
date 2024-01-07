export default function FormButtons({forForm, onSubmit, goBack = false}) {
  return (
    <footer>
      {goBack && <a href={goBack} id="prevStep">Go Back</a>}
      <button id="nextStep" type="submit" form={forForm} onClick={onSubmit}>Next Step</button>
    </footer>
  )
}