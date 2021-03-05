import React from 'react'

import "../assets/styles/CalloutChecklist.scss"

import UsersSVG from '../assets/images/users-duotone.svg'
import CommentsSVG from '../assets/images/comments-alt-duotone.svg'
import CheckSVG from '../assets/images/check-duotone.svg'

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
            <h3>Qualified Employees</h3>
            <p>Our team consists of more than 20 qualified and experienced accountants, marketers, and managers.</p>
          </CTACard>
          <CTACard icon={CommentsSVG}>
            <h3>Free Consultations</h3>
            <p>Our acquaintance with a client always begins with a free consultation to find out possible solutions to their problems.</p>
          </CTACard>
          <CTACard icon={CheckSVG}>
            <h3>100% Guaranteed</h3>
            <p>All results that you get from us are 100% guaranteed to bring you to a whole new level of profitability and financial success.</p>
          </CTACard>
        </div>
      </div>
    </section>
  )
}

export default CalloutChecklist
