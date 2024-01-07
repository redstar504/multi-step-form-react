export default function FormButtons({forForm, onSubmit}) {
  return (
    <footer>
      <a href="#" id="prevStep">Go Back</a>
      <button id="nextStep" type="submit" form={forForm} onClick={onSubmit}>Next Step</button>
    </footer>
  )
}