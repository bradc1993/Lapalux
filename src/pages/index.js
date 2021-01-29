import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from "../components/scene"
import Clip from "../components/clip"
import LoadScreen from "../components/load-screen"
import Menu from "../components/menu"
import About from "../components/about"

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

const IndexPage = () => {
  const [entered, triggerEntered] = useState(false)

  const handleEnter = () => {
    triggerEntered(true)
    const audio = document.getElementById("current-song")
    audio.play()
  }
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

  return (
    <AnimatePresence>
      <SEO title="Home" key="seo" />
      {!entered ? (
        <motion.div
          key="loadscreen-wrapper"
          style={{ position: "absolute", width: "100vw", height: "100vh" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, delay: 2 }}
        >
          <LoadScreen key="loadscreen-component" handleEnter={handleEnter} />
        </motion.div>
      ) : null}
      <Layout
        key="layout"
        menu={menu}
        toggleMenu={toggleMenu}
        toggleAbout={toggleAbout}
        song={song}
      >
        <AnimatePresence exitBeforeEnter>
          {about ? (
            <motion.div
              className="about"
              key="about-wrapper"
              initial={{ x: "-50vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-50vw" }}
              transition={{
                duration: 0.85,
                type: "spring",
                bounce: 0,
              }}
            >
              <About key="about-component" />
            </motion.div>
          ) : null}
          {menu ? (
            <motion.div
              className="menu"
              key="menu-wrapper"
              initial={{ x: "50vw" }}
              animate={{ x: 0 }}
              exit={{ x: "50vw" }}
              transition={{
                duration: 0.85,
                type: "spring",
                bounce: 0,
              }}
            >
              <Menu
                key="menu-component"
                // menu={menu}
                // closeMenu={closeMenu}
                handleSongChange={handleSongChange}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        {entered ? (
          <Scene key="scene">
            <Clip key="clip" videoLoop={videoLoop} key={videoLoop} />
          </Scene>
        ) : null}
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
