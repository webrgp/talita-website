import React from 'react'

import "../assets/styles/CalloutRibbon.scss"

interface ICalloutRibbon {
  link?: any,
  children?: any
}

const CalloutRibbon: React.FC<ICalloutRibbon> = ({ link, children }) => {
  return (
    <section className="CalloutRibbon">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col col-12 col-md-8">
            <h3>{children}</h3>
          </div>
          <div className="col col-12 col-md-4 button">{link}</div>
        </div>
      </div>
    </section>
  )
}

export default CalloutRibbon
