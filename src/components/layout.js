import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children, ptitle, homeUrl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="container-xxl bg-white p-0">
         {/* Spinner Start  */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{width: `3rem`, height: `3rem`}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
      {}<Header siteTitle={data.site.siteMetadata?.title || `Title`} homeUrl={homeUrl} pTitle={ptitle}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default Layout
