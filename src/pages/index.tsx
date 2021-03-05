import * as React from "react"
import { PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <StaticImage
      src="../assets/images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
