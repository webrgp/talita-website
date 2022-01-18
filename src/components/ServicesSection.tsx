import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import '../assets/styles/ServicesSection.scss'

interface IServicesItem {
  title?: { text: string }
  cover_picture?: any
}

const ServiceItem = ({ title, cover_picture }: IServicesItem) => {
  const image = cover_picture?.gatsbyImageData as IGatsbyImageData
  return (
    <div className="col-6 col-md-3">
      <GatsbyImage image={image} alt={title?.text ?? `Service Cover`} />
      {title?.text && <h4>{title.text}</h4>}
    </div>
  )
}

interface ICalloutRibbon {
  primary?: any
  items?: [any]
}

const ServicesSection = ({ primary, items }: ICalloutRibbon) => {
  return (
    <section className="ServicesSection">
      <header>
        {primary?.title?.text && <h3>{primary.title.text}</h3>}
        <div dangerouslySetInnerHTML={{ __html: primary?.intro?.html }} />
      </header>

      <div className="container-fluid container-lg">
        <div className="row">
          {items?.map((item: any, index: number) => (
            <ServiceItem
              key={`service-item--${index}`}
              {...item?.featured_services?.document?.data}
            />
          ))}
        </div>
      </div>

      {primary?.cta_button_text && primary?.cta_button_link && (
        <footer>
          {primary?.cta_button_link?.link_type === `Document` && (
            <Link
              className="btn btn-outline-red"
              to={`${primary?.cta_button_link?.url}${primary?.cta_button_link?.uid}`}
            >
              {primary?.cta_button_text}
            </Link>
          )}
          {primary?.cta_button_link?.link_type === `web` && (
            <a
              className="btn btn-outline-red"
              href={`${primary?.cta_button_link?.url}`}
              target={`${primary?.cta_button_link?.target}`}
              rel="noreferrer noopener"
            >
              {primary?.cta_button_text}
            </a>
          )}
        </footer>
      )}
    </section>
  )
}

export default ServicesSection

export const query = graphql`
  fragment homepageServicesGrid on PrismicHomepageDataBodyServicesGrid {
    slice_type
    primary {
      title {
        text
      }
      intro {
        html
      }
      cta_button_text
      cta_button_link {
        link_type
        url
        slug
        uid
        target
      }
    }
    items {
      featured_services {
        document {
          ... on PrismicServices {
            id
            data {
              title {
                text
              }
              cover_picture {
                url
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
