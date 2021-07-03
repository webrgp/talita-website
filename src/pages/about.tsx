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
      <p>Talita Camilo Professional Services provides individuals and small to medium-size businesses in all industries with quality, affordable, and personalized professional services and tax solutions.</p>
      <p><strong>We are committed to helping each of our clients succeed. For this reason, our employees are always up-to-date with the latest audit, accounting, and tax requirements. It ensures that we deliver accurately the best advice combined with solid and dependable customer service.</strong></p>
      <p>Our high standards of service, and specialized team establishes the difference between Talita Camilo Professional Services and the other firms. You can trust us to absolve financial stress from your business and personal finances matters. </p>
    </div>

    <TeamSection />
  </article>
)

export default AboutPage
