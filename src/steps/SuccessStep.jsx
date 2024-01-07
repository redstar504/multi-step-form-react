import '../styles/success.css'
import { useEffect } from 'react'
import { useSubscription } from '../context/SubscriptionProvider.jsx'

function SuccessStep() {
  const { reset } = useSubscription()

  useEffect(() => {
    reset()
  }, [])

  return (
    <section className="card" id="successCard">
      <article>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.</p>
      </article>
    </section>
  )
}

export default SuccessStep