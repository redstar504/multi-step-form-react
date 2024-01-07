import '../styles/addons.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSubscription } from '../hooks/useSubscription.js'

export default function AddonsStep() {
  const { saveStep, subscription } = useSubscription()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      addons: subscription.addons,
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
            <li>
              <input
                {...register('addons' )}
                name="addons"
                value="onlineServices"
                type="checkbox"
                id="onlineServiceOffer"
              />
              <label htmlFor="onlineServiceOffer">
                <i className="addonControl"></i>
                <span className="offer">
                        Online service
                        <small>Access to multiplayer games</small>
                    </span>
                <small className="fee">+$1/mo</small>
              </label>
            </li>
            <li>
              <input
                {...register('addons' )}
                name="addons"
                type="checkbox"
                id="largerStorageOffer"
                value="largerStorage"
              />
              <label htmlFor="largerStorageOffer">
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
                id="customProfileOffer"
                value="customProfile"
              />
              <label htmlFor="customProfileOffer">
                <i className="addonControl"></i>
                <span className="offer">
                        Customizable profile
                        <small>Custom theme on your profile</small>
                    </span>
                <small className="fee">+$2/mo</small>
              </label>
            </li>
          </ul>
        </form>
      </section>
      <FormButtons forForm="addonsForm" onSubmit={handleSubmit(onSubmit)} goBack="/plan" />
    </>
  )
}