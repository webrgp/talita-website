import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import "../assets/styles/TeamSection.scss"

interface ITeamSection {
  children?: any
}

const TeamSection: React.FC = ({ children }) => {
  return (
    <section className="TeamSection">
      <div className="container">
        <div className="row">
          <div className="col-12 rich-text">
            <h3>Our Team</h3>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/talita-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1/1}
                formats={["auto", "webp", "avif"]}
                loading="lazy"
                placeholder="blurred"
                alt="Talita Camilo Headshot"
              />
              <h4>
                Talita Camilo
                <small>President & Senior Accountant</small>
              </h4>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="TeamCard">
              <StaticImage
                src="../assets/images/josi-profile.jpg"
                quality={100}
                width={640}
                aspectRatio={1/1}
                formats={["auto", "webp", "avif"]}
                loading="lazy"
                placeholder="blurred"
                alt="Talita Camilo Headshot"
              />
              <h4>
                Josi Piva
                <small>Account Manager</small>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TeamSection
