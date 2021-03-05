import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

type DataProps = {
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
