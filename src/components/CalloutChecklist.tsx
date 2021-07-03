import React from 'react'

import "../assets/styles/CalloutChecklist.scss"

import UsersSVG from '../assets/images/users-duotone.svg'
import TransporterSVG from '../assets/images/transporter-2-duotone.svg'
import CheckSVG from '../assets/images/ballot-check-duotone.svg'

interface CTACardProps {
  icon?: any,
  children?: any
}

const CTACard = ({icon, children}: CTACardProps) => (
  <div className="CTACard col-12 col-md-4">
    <div className="CTACard--box">
      <div className="CTACard--icon"><img src={icon} alt="Card Icon"/></div>
      <div className="CTACard--content">{children}</div>
    </div>
  </div>
)

const CalloutChecklist: React.FC = () => {
  return (
    <section className="CalloutChecklist">
      <div className="container-fluid container-lg">
        <div className="row">
          <CTACard icon={UsersSVG}>
            <h3>Experienced Professionals </h3>
            <p>Our team is highly knowledgeable, qualified, and licensed. We are ready to help you with all your professional services, accounting, and tax needs.</p>
          </CTACard>
          <CTACard icon={CheckSVG}>
            <h3>Tailored Solutions </h3>
            <p>We provide personalized services. We tailor a variety of services that offer assistance for individuals, families, and small to medium-size businesses. </p>
          </CTACard>
          <CTACard icon={TransporterSVG}>
            <h3>Customer-centric Vision</h3>
            <p>We stay focused on what's most important – you. We work proactively to solve our client's needs while delivering a positive experience.</p>
          </CTACard>
        </div>
      </div>
    </section>
  )
}

export default CalloutChecklist
