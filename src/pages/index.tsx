import { graphql, PageProps } from 'gatsby'

import SEO from '../components/SEO'
import HeroBanner from '../components/HeroBanner'
import CalloutChecklist from '../components/CalloutChecklist'
import CalloutRibbon from '../components/CalloutRibbon'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'

const IndexPage = ({ data }: PageProps) => {
  console.log(data)

  return (
    <>
      <SEO title="Home" />
      <HeroBanner title="We Are Here To Help" />
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

export default IndexPage

export const query = graphql`
  query Home {
    prismicHomepage {
      id
      url
      data {
        hero_title {
          html
        }
        hero_banner_picture {
          alt
          url
          gatsbyImageData(placeholder: BLURRED)
          thumbnails {
            Mobile {
              alt
              copyright
              url
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
