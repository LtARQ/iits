import * as React from 'react'
import Layout from '../components/layout'
import Commingsoon from '../components/commingsoon'
import Seo from '../components/seo'
const certification = () => {
  return (
    <>
    <Layout ptitle="Certification">
    <Commingsoon/>
    </Layout>
    </>
  )
}
export const Head = () => <Seo title="Certification" />
export default certification