/* eslint-disable react/no-unused-prop-types */
import '../assets/styles/CalloutChecklist.scss'

import { graphql } from 'gatsby'

interface CTACardProps {
  icon: any
  title: string
  content: string
}

const CTACard = ({ icon, title, content }: CTACardProps) => (
  <div className="CTACard col-12 col-md-4">
    <div className="CTACard--box">
      <div className="CTACard--icon">
        <img src={icon} alt="Card Icon" />
      </div>
      <div className="CTACard--content">
        {title && <h3>{title}</h3>}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  </div>
)

interface ICalloutChecklist {
  items?: any
}

interface ICalloutChecklistItem {
  title?: any
  content?: any
  svg_icon?: any
}

const CalloutChecklist = ({ items }: ICalloutChecklist) => {
  return (
    <section className="CalloutChecklist">
      <div className="container-fluid container-lg">
        <div className="row">
          {items &&
            items.length > 0 &&
            items.map(
              (
                { title, content, svg_icon }: ICalloutChecklistItem,
                index: number,
              ) => (
                <CTACard
                  key={`cta-card-item--${index}`}
                  icon={svg_icon?.url}
                  title={title?.text}
                  content={content?.html}
                />
              ),
            )}
        </div>
      </div>
    </section>
  )
}

export default CalloutChecklist

export const query = graphql`
  fragment homepageFeaturedColumns on PrismicHomepageDataBodyFeaturedColumns {
    slice_type
    items {
      title {
        text
      }
      svg_icon {
        url
      }
      content {
        html
      }
    }
  }
`
