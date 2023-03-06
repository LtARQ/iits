import * as React from "react"
import Seo from "../components/seo"
import '../components/bootstrap.min.css';
import Layout from "../components/layout"
import '../components/gstyle.css'
import Newslet from "../components/Newslet";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutC from "../components/AboutC";

const IndexPage = (props) =>{
  const homeUrl = props.location.pathname
 return (
  <>       
    <Layout homeUrl={homeUrl}>
      <AboutC></AboutC>
      <Newslet></Newslet>
      <Services></Services>
      <Portfolio></Portfolio>
    </Layout>
  </>
)
 }
export const Head = () => (
   <>
    <Seo title="Home" />
   </>
)
export default IndexPage