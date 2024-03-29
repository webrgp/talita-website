import 'whatwg-fetch'

import Layout from './src/components/Layout'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
