import { graphql, PageProps } from 'gatsby'
import { HomeScreen } from '../components/Screens/HomeScreen'

const HomePage = ({ data }: PageProps) => {
  return <HomeScreen entry={data} />
}

export default HomePage

export const query = graphql`
  query Home {
    prismicHomepage {
      id
      url
      data {
        hero_title {
          text
        }
        hero_banner_picture {
          alt
          url
          gatsbyImageData(placeholder: BLURRED)
          thumbnails {
            Mobile {
              alt
              copyright
              url
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
