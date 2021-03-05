import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import "../assets/styles/HeroBanner.scss"


interface Props {
  title: String
}

const HeroBanner: React.FC<Props> = ({ title }) => {
  return (
    <div className="HeroBanner">
      <StaticImage
        src="../assets/images/home-cover.jpg"
        quality={100}
        width={1400}
        formats={["auto", "webp", "avif"]}
        alt="Talita Team Cover"
      />
      <div className="HeroBanner--caption">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default HeroBanner
