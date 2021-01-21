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

import LimbVideo from "../videos/limb-clip.mp4"
import EarthVideo from "../videos/earth.mp4"

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
  const [url, changeUrl] = useState(LimbVideo)

  const handleAlbumChange = album => {
    changeUrl(album === "Amnioverse" ? LimbVideo : EarthVideo)
    const audio = document.getElementById("current-song")
    audio.pause()
    changeAlbum(album)
    toggleMenu(false)
    audio.play()
  }

  const globals = {
    menu: menu,
    closeMenu: () => toggleMenu(false),
    album: album,
    handleAlbumChange: handleAlbumChange,
    url: url,
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        openMenu={() => toggleMenu(!menu)}
        menu={menu}
      />
      <main>{props.children({ ...props, ...globals })}</main>
      <Footer album={album} />
      {/* <Cursor /> */}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
