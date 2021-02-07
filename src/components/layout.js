/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { StateProvider, store } from "./store"
import MenuContextProvider from "./store"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, pageContext }) => {
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
        onAboutPage={pageContext.layout === "about" ? true : false}
      />
      <main>{children}</main>
      <Footer onAboutPage={pageContext.layout === "about" ? true : false} />
    </MenuContextProvider>
  )
}

export default Layout
