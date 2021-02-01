/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Cursor from "./cursor"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ menu, toggleAbout, toggleMenu, song, about, children }) => {
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
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        // openAbout={() => toggleAbout(!about)}
        openMenu={() => toggleMenu(!menu)}
        menu={menu}
      />
      <main>{children}</main>
      <Footer song={song} />
      {/* <Cursor /> */}
    </>
  )
}

export default Layout
