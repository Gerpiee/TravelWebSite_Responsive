import React from 'react'

import callToActionCSS from "../Footer/CallToAction.module.css"

const CallToAction = () => {
  return (
    <div className={`${callToActionCSS.CalltoAction_wrapper} section`}>
        <h2>Explore Iconic Popular Destination <br />
        With Expert Insides </h2>

        <button>Book Advanture</button>
    </div>
  )
}

export default CallToAction
