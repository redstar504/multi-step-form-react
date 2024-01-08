import '../styles/success.css'
import { useSubscription } from '../hooks/useSubscription.js'
import { useEffect } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

function SuccessStep() {
  const { resetSubscription } = useSubscription()
  useEffect(
    () => resetSubscription(), []
  )

  return (
    <>
      <section className="card" id="successCard">
        <div id="confettiContainer">
          <ConfettiExplosion />
        </div>
        <article>
          <h1>Thank you!</h1>
          <p>Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free to
            email us at support@loremgaming.com.</p>
        </article>
      </section>
    </>
  )
}

export default SuccessStep