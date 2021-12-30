import CalloutChecklist from '../../CalloutChecklist'
import CalloutRibbon from '../../CalloutRibbon'
import HeroBanner from '../../HeroBanner'
import SEO from '../../SEO'
import ServicesSection from '../../ServicesSection'
import Testimonials from '../../Testimonials'
import { HomeQuery, PrismicHomepageDataType } from '../../../types.generated'

interface Props {
  entry: HomeQuery
}

export const HomeScreen = ({ entry }: Props) => {
  const contentData = entry?.prismicHomepage?.data as PrismicHomepageDataType

  return (
    <>
      <SEO title="Home" />
      <HeroBanner {...contentData} />
      <CalloutChecklist />
      <CalloutRibbon
        link={
          <a
            className="btn"
            href="http://talitacamilo.gettimely.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Schedule a Visit
          </a>
        }
      >
        Get back to the job of <strong>running your business</strong>
        <br />
        and leave the bureaucratic part to us!
      </CalloutRibbon>
      <ServicesSection />
      <Testimonials />
    </>
  )
}
