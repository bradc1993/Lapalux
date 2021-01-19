/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Cursor from "./cursor"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menu, toggleMenu] = useState(false)
  const [album, changeAlbum] = useState("Amnioverse")
  const handleAlbumChange = selectedAlbum => {
    changeAlbum(selectedAlbum)
  }
  const globals = {
    menu: menu,
    closeMenu: () => toggleMenu(false),
    album: album,
    handleAlbumChange: handleAlbumChange,
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        openMenu={() => toggleMenu(true)}
      />
      <main>{props.children({ ...props, ...globals })}</main>
      <Footer />
      {/* <Cursor /> */}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
