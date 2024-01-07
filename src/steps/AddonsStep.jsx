import '../styles/addons.css'
import FormButtons from './FormButtons.jsx'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function AddonsStep({updateNav}) {
  const existingData = JSON.parse(sessionStorage.getItem("data"))

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      largerStorageAddon: existingData?.largerStorageAddon,
      onlineServiceAddon: existingData?.onlineServiceAddon,
      customProfileAddon: existingData?.customProfileAddon,
    }
  })

  useEffect(() => {
    updateNav(2)
  }, [updateNav])

  const navigate = useNavigate()

  const onSubmit = data => {
    // save data
    const existingData = JSON.parse(sessionStorage.getItem('data'))
    const mergedData = {...existingData, ...data};
    sessionStorage.setItem("data", JSON.stringify(mergedData))

    // navigate to next step
    navigate("/summary")
  }

  return (
    <>
      <section className="card">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience. </p>
        <form id="selectAddons">
          <ul id="planAddons">
            <li>
              <input
                {...register("onlineServiceAddon")}
                name="onlineServiceAddon"
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
                {...register("largerStorageAddon")}
                name="largerStorageAddon"
                type="checkbox"
                id="largerStorageOffer"
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
                {...register("customProfileAddon")}
                name="customProfileAddon"
                type="checkbox"
                id="customProfileOffer"
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
      <FormButtons forForm="addonsForm" onSubmit={handleSubmit(onSubmit)} goBack='/plan' />
    </>
  )
}