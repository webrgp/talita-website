import * as React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/SEO"
import PageHeader from "../components/PageHeader"
import TeamSection from "../components/TeamSection"

const AboutPage: React.FC<PageProps> = () => (
  <article>
    <SEO title="About Us" />
    <PageHeader title="About Us" >
      <StaticImage
        src="../assets/images/about-us-cover.jpg"
        quality={100}
        width={1200}
        aspectRatio={1110/454}
        formats={["auto", "webp", "avif"]}
        loading="eager"
        placeholder="blurred"
        alt="Talita Team Cover"
      />
    </PageHeader>
    <div className="container rich-text">
      <h3>About Talita Camilo</h3>
      <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
      <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
    </div>

    <TeamSection />
  </article>
)

export default AboutPage
