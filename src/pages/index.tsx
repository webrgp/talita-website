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
      Learn the Cost of your <strong>Accounting Solutions</strong> Right Now!
    </CalloutRibbon>
    <ServicesSection />
    <Testimonials />
  </>
)

export default IndexPage
