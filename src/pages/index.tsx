import * as React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/SEO"
import HeroBanner from "../components/HeroBanner"
import CalloutChecklist from "../components/CalloutChecklist"
import CalloutRibbon from "../components/CalloutRibbon"

type DataProps = {
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <>
    <SEO title="Home" />
    <HeroBanner title="We Are Here To Help" />
    <CalloutChecklist />
    <CalloutRibbon
      link={<a className="btn" href="http://talitacamilo.gettimely.com" target="_blank" rel="noreferrer noopener">Schedule a Visit</a>}
    >
      Learn the Cost of your <strong>Accounting Solutions</strong> Right Now!
    </CalloutRibbon>
    <p>Services Section</p>
    <p>Testimonials</p>
    <p>Latest Blog</p>
  </>
)

export default IndexPage
