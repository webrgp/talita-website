import * as React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/SEO"
import HeroBanner from "../components/HeroBanner"
import CalloutChecklist from "../components/CalloutChecklist"

type DataProps = {
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <>
    <SEO title="Home" />
    <HeroBanner title="We Are Here To Help" />
    <CalloutChecklist />
    <p>ribbon</p>
    <p>Services Section</p>
    <p>Testimonials</p>
    <p>Latest Blog</p>
  </>
)

export default IndexPage
