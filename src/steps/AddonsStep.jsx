import '../styles/addons.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSubscription } from '../hooks/useSubscription.js'
import plans from '../plans.json'

export default function AddonsStep() {
  const { saveStep, subscription, term } = useSubscription()
  const allAddons = plans.addons
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      addons: subscription.addons || [],
    }
  })

  const onSubmit = data => saveStep(2, data, () => navigate('/summary'))

  return (
    <>
      <section className="card">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience. </p>
        <form id="selectAddons">
          <ul id="planAddons">
            {Object.keys(allAddons).map((key, i) => (
              <li key={i}>
                <input
                  {...register('addons')}
                  name="addons"
                  type="checkbox"
                  id={allAddons[key].label}
                  value={key}
                />
                <label htmlFor={allAddons[key].label}>
                  <i className="addonControl"></i>
                  <span className="offer">
                        {allAddons[key].label}
                        <small>{allAddons[key].description}</small>
                    </span>
                  <small className="fee">+${allAddons[key][term.long]}/{term.short}</small>
                </label>
              </li>
            ))}

            {/*<li>
              <input
                {...register('addons')}
                name="addons"
                type="checkbox"
                id="largerStorage"
                value="largerStorage"
              />
              <label htmlFor="largerStorage">
                <i className="addonControl"></i>
                <span className="offer">
                        Larger Storage
                        <small>Extra 1TB of cloud storage</small>
                    </span>
                <small className="fee">+$2/mo</small>
              </label>
            </li>
            <li>
              <input
                {...register('addons')}
                name="addons"
                type="checkbox"
                id="customProfile"
                value="customProfile"
              />
              <label htmlFor="customProfile">
                <i className="addonControl"></i>
                <span className="offer">
                        Customizable profile
                        <small>Custom theme on your profile</small>
                    </span>
                <small className="fee">+$2/mo</small>
              </label>
            </li>*/}
          </ul>
        </form>
      </section>
      <FormButtons forForm="addonsForm" onSubmit={handleSubmit(onSubmit)} goBack="/plan" />
    </>
  )
}