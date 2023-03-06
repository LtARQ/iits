import* as React from 'react'
import Layout from '../../components/layout'
import Portfolio from '../../components/Portfolio'
import Seo from '../../components/seo'

const courses = () => {
  
  return (
    <>
    <Layout ptitle="Courses">
    <Portfolio/>
    </Layout>
    </>
  )
}
export const Head = () => <Seo title="Courses" />
export default courses