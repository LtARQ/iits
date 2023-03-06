import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import TeamC from '../components/TeamC'
const team = () => {
  return (
    <>
    <Layout ptitle="Our Team">
    <TeamC/>
    </Layout>
    </>
  )
}
export const Head = () => <Seo title="Team" />
export default team
