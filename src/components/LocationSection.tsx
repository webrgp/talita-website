import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import "../assets/styles/LocationSection.scss"

const LocationSection: React.FC = () => {
  return (
    <section className="LocationSection">
      <div className="container-fluid container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-5 text-center">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <StaticImage
                src="../assets/images/hyannis.jpg"
                quality={100}
                width={540}
                aspectRatio={4/3}
                formats={["auto", "webp", "avif"]}
                loading="eager"
                placeholder="blurred"
                alt="Hyannis Location"
              />
            </a>
            100 West Main Street, Unit 2 <br />
            Hyannis, MA - 02601 <br />
            (508) 790-7014
          </div>
          <div className="col-12 col-sm-6 col-md-5 text-center">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <StaticImage
                src="../assets/images/charleston.jpg"
                quality={100}
                width={540}
                aspectRatio={4/3}
                formats={["auto", "webp", "avif"]}
                loading="eager"
                placeholder="blurred"
                alt="Charleston Location"
              />
            </a>
            529 Main Street Powerhouse Bldg<br />
            2nd floor, Room 239<br />
            Charlestown, MA<br />
            (508) 790-7014
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
