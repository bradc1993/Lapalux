/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Cursor from "./cursor"
// import { StateProvider, store } from "./store"
import MenuContextProvider from "./store"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const globalState = useContext(store)
  // const { dispatch } = globalState

  return (
    <MenuContextProvider>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        // openAbout={() => toggleAbout(!about)}
        // openMenu={() => toggleMenu(!menu)}
        // menu={menu}
      />
      <main>{children}</main>
      <Footer />
      {/* <Cursor /> */}
    </MenuContextProvider>
  )
}

export default Layout
