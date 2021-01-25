import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from "../components/scene"
import Clip from "../components/clip"
import LoadScreen from "../components/load-screen"
import Menu from "../components/menu"
import About from "../components/about"

const IndexPage = () => {
  const [entered, triggerEntered] = useState(false)

  const handleEnter = () => {
    triggerEntered(true)
    const audio = document.getElementById("current-song")
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
      <Layout key="layout">
        {props => (
          <>
            <AnimatePresence exitBeforeEnter>
              {props.about ? (
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
              {props.menu ? (
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
                    // menu={props.menu}
                    // closeMenu={props.closeMenu}
                    handleSongChange={props.handleSongChange}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            {entered ? (
              <Scene key="scene">
                <Clip
                  key="clip"
                  videoLoop={props.videoLoop}
                  key={props.videoLoop}
                />
              </Scene>
            ) : null}
          </>
        )}
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
