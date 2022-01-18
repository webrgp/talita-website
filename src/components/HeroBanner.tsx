import {
  GatsbyImage,
  IGatsbyImageData,
  withArtDirection,
} from 'gatsby-plugin-image'

import '../assets/styles/HeroBanner.scss'

interface IHeroBanner {
  hero_title?: any
  hero_banner_picture?: any
}

const HeroBanner = ({ hero_title, hero_banner_picture }: IHeroBanner) => {
  const bannerImage = hero_banner_picture?.gatsbyImageData as IGatsbyImageData
  const bannerAlt = hero_banner_picture?.alt as string

  const mobileImage = hero_banner_picture?.thumbnails?.Mobile
    ?.gatsbyImageData as IGatsbyImageData

  const images = withArtDirection(bannerImage, [
    {
      media: `(max-width: 720px)`,
      image: mobileImage,
    },
  ])

  return (
    <section className="HeroBanner">
      {images && (
        <GatsbyImage
          image={images}
          alt={bannerAlt}
          className="HeroBanner--banner-image"
        />
      )}
      <div className="HeroBanner--caption">
        {hero_title && <h1>{hero_title?.text}</h1>}
      </div>
    </section>
  )
}

export default HeroBanner
