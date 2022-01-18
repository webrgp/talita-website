import { graphql } from 'gatsby'

import '../assets/styles/CalloutRibbon.scss'

interface ICalloutRibbon {
  primary?: any
}
const CalloutRibbon = ({ primary }: ICalloutRibbon) => {
  return (
    <section className="CalloutRibbon">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col col-12 col-md-8"
            dangerouslySetInnerHTML={{ __html: primary?.content?.html }}
          />
          <div className="col col-12 col-md-4 button">
            <a
              className="btn"
              href={primary?.cta_button_link?.url}
              target={primary?.cta_button_link?.target}
              rel="noreferrer noopener"
            >
              {primary?.cta_button_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalloutRibbon

export const query = graphql`
  fragment homepageRedRibbonCta on PrismicHomepageDataBodyRedRibbonCta {
    slice_type
    primary {
      cta_button_text
      content {
        html
      }
      cta_button_link {
        url
        target
        isBroken
      }
    }
  }
`
