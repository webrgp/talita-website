import * as React from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import PageHeader from "../components/PageHeader"

import SEO from "../components/SEO"

const ServicesPage: React.FC<PageProps> = () => (
  <article>
    <SEO title="Services" />
    <PageHeader title="Services" >
      <StaticImage
        src="../assets/images/services-cover.jpg"
        quality={100}
        width={1200}
        aspectRatio={1110/454}
        formats={["auto", "webp", "avif"]}
        loading="eager"
        placeholder="blurred"
        alt="Services Cover"
      />
    </PageHeader>

    <div className="container rich-text">
      <p>Our firm provides individuals, families, and small to medium size businesses in all industries and professions with quality, affordable, personalized tax and professional services in your area.</p>
    </div>

    <div className="container-fluid container-lg">

    <div className="row align-items-center my-5">
        <div className="col-12 col-sm-5 col-md-3">
          <StaticImage
            src="../assets/images/translation.jpg"
            quality={100}
            width={720}
            aspectRatio={255/283}
            loading="lazy"
            formats={["auto", "webp", "avif"]}
            alt="Translations"
          />
        </div>
        <div className="col-12 col-sm-7 col-md-9">
          <h3>Translations</h3>
          <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
        </div>
      </div>

      <div className="row align-items-center my-5">
        <div className="col-12 col-sm-5 col-md-3">
          <StaticImage
            src="../assets/images/taxes.jpg"
            quality={100}
            width={720}
            aspectRatio={255/283}
            loading="lazy"
            formats={["auto", "webp", "avif"]}
            alt="Taxes & Tax Resolutions"
          />
        </div>
        <div className="col-12 col-sm-7 col-md-9">
          <h3>Taxes & Tax Resolutions</h3>
          <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
        </div>
      </div>

      <div className="row align-items-center my-5">
        <div className="col-12 col-sm-5 col-md-3">
          <StaticImage
            src="../assets/images/bookkeping.jpg"
            quality={100}
            width={720}
            aspectRatio={255/283}
            loading="lazy"
            formats={["auto", "webp", "avif"]}
            alt="Bookkeeping & Payroll"
          />
        </div>
        <div className="col-12 col-sm-7 col-md-9">
          <h3>Bookkeeping & Payroll</h3>
          <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
        </div>
      </div>

      <div className="row align-items-center my-5">
        <div className="col-12 col-sm-5 col-md-3">
          <StaticImage
            src="../assets/images/consulting.jpg"
            quality={100}
            width={720}
            aspectRatio={255/283}
            loading="lazy"
            formats={["auto", "webp", "avif"]}
            alt="Consulting"
          />
        </div>
        <div className="col-12 col-sm-7 col-md-9">
          <h3>Consulting</h3>
          <p>Ipsum dolor adipisicing laborum id minim duis ut qui. Non ipsum sunt nulla sint. Minim occaecat id exercitation aute enim proident deserunt commodo qui occaecat sit esse elit. Nulla sunt exercitation nostrud enim ipsum excepteur magna eiusmod. Eiusmod dolore et nulla et dolor voluptate. Tempor do voluptate consectetur aute velit.</p>
        </div>
      </div>

    </div>

  </article>
)

export default ServicesPage
