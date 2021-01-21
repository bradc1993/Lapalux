/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
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
  const [song, changeSong] = useState("Limb to Limb (ft. Lilia)")
  const [videoLoop, changeVideoLoop] = useState(LimbVideo)

  const handleSongChange = song => {
    //change video
    changeVideoLoop(
      song === "Limb to Limb (ft. Lilia)" ? LimbVideo : EarthVideo
    )

    //target and change song
    const audio = document.getElementById("current-song")
    audio.pause()
    changeSong(song)
    toggleMenu(false)
    audio.play()
  }

  const globals = {
    menu: menu,
    closeMenu: () => toggleMenu(false),
    song: song,
    handleSongChange: handleSongChange,
    videoLoop: videoLoop,
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        openMenu={() => toggleMenu(!menu)}
        menu={menu}
      />
      <main>{props.children({ ...props, ...globals })}</main>
      <Footer song={song} />
      {/* <Cursor /> */}
    </>
  )
}

export default Layout
