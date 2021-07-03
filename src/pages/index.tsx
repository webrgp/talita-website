import * as React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/SEO"
import HeroBanner from "../components/HeroBanner"
import CalloutChecklist from "../components/CalloutChecklist"
import CalloutRibbon from "../components/CalloutRibbon"
import ServicesSection from "../components/ServicesSection"
import Testimonials from "../components/Testimonials"

const IndexPage: React.FC<PageProps> = () => (
  <>
    <SEO title="Home" />
    <HeroBanner title="We Are Here To Help" />
    <CalloutChecklist />
    <CalloutRibbon
      link={<a className="btn" href="http://talitacamilo.gettimely.com" target="_blank" rel="noreferrer noopener">Schedule a Visit</a>}
    >
      Get back to the job of <strong>running your business</strong><br />and leave the bureaucratic part to us!
    </CalloutRibbon>
    <ServicesSection />
    <Testimonials />
  </>
)

export default IndexPage
