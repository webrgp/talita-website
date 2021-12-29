import { useStaticQuery, graphql } from 'gatsby'

const testimonialsQuery = graphql`
  query TestimonialsQuery {
    allPrismicTestimonials {
      nodes {
        data {
          cite {
            text
          }
          quote {
            text
          }
          cite_complement {
            text
          }
        }
      }
    }
  }
`

/**
 * Get Craft's mainNav top level data, with nested entries
 */
export const useFooterMetaNav = () => {
  const { allPrismicTestimonials } = useStaticQuery(testimonialsQuery)

  return allPrismicTestimonials?.nodes?.map(({ data }) => data)
}
