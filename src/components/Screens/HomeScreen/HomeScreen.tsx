import CalloutChecklist from '../../CalloutChecklist'
import CalloutRibbon from '../../CalloutRibbon'
import HeroBanner from '../../HeroBanner'
import SEO from '../../SEO'
import ServicesSection from '../../ServicesSection'
import Testimonials from '../../Testimonials'

interface Props {
  entry: any
}

interface ISliceType {
  slice_type: string
  rest?: any
}

export const HomeScreen = ({ entry }: Props) => {
  const contentData = entry?.prismicHomepage?.data

  return (
    <>
      <SEO title="Home" />
      <HeroBanner {...contentData} />
      {contentData?.body &&
        contentData?.body.map(
          ({ slice_type, ...rest }: ISliceType, index: number) => {
            switch (slice_type) {
              case `featured_columns`:
                return <CalloutChecklist key={`slice--${index}`} {...rest} />

              case `red_ribbon_cta`:
                return <CalloutRibbon key={`slice--${index}`} {...rest} />

              case `services_grid`:
                return <ServicesSection key={`slice--${index}`} {...rest} />

              case `testimonials`:
                return <Testimonials key={`slice--${index}`} {...rest} />

              default:
                break
            }

            return null
          },
        )}
    </>
  )
}
