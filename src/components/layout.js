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

import LimbVideo from "../videos/limb.mp4"
import OblivionVideo from "../videos/oblivion.mp4"
import VoltaicVideo from "../videos/voltaic-acid.mp4"
import MomentineVideo from "../videos/momentine.mp4"
import EarthVideo from "../videos/earth.mp4"
import HellixVideo from "../videos/hellix.mp4"
import ThinVideo from "../videos/thin-air.mp4"
import LuxVideo from "../videos/lux-quadrant.mp4"
import AmnioverseVideo from "../videos/amnioverse.mp4"
import EscVideo from "../videos/esc.mp4"

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

  const [about, toggleAbout] = useState(false)
  const [menu, toggleMenu] = useState(false)
  const [song, changeSong] = useState("Limb to Limb (ft. Lilia)")
  const [videoLoop, changeVideoLoop] = useState(LimbVideo)

  const handleSongChange = song => {
    //change video
    changeVideoLoop(
      song === "Limb to Limb (ft. Lilia)"
        ? LimbVideo
        : song === "Oblivion"
        ? OblivionVideo
        : song === "Voltaic Acid"
        ? VoltaicVideo
        : song === "Momentine"
        ? MomentineVideo
        : song === "Earth"
        ? EarthVideo
        : song === "Hellix"
        ? HellixVideo
        : song === "Thin Air (ft. JFDR)"
        ? ThinVideo
        : song === "The Lux Quadrant (ft. JFDR)"
        ? LuxVideo
        : song === "Amnioverse"
        ? AmnioverseVideo
        : EscVideo
    )

    //target and change song
    const audio = document.getElementById("current-song")
    audio.pause()
    changeSong(song)
    toggleMenu(false)
    audio.play()
  }

  const globals = {
    about: about,
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
        openAbout={() => toggleAbout(!about)}
        openMenu={() => toggleMenu(!menu)}
        menu={menu}
      />
      <main>{props.children({...props, ...globals })}</main>
      <Footer song={song} />
      {/* <Cursor /> */}
    </>
  )
}

export default Layout
