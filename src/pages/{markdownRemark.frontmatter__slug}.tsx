import { graphql, PageProps } from 'gatsby'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

interface Props extends PageProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        slug: string
        title: string
      }
    }
  }
}

const MdPageTemplate = ({ data }: Props) => {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log({ frontmatter, html })

  return (
    <article style={{ paddingBottom: `2rem` }}>
    <SEO title={frontmatter.title} />
    <PageHeader title={frontmatter.title} />

    <div className="container-fluid container-lg">
      <div className="row justify-content-center">
        <div className="col col-md-10">
          <div
            className="md-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  </article>
  )
}

export default MdPageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
