import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Scene from "../components/scene"
import Clip from "../components/clip"
import LoadScreen from "../components/load-screen"
import Menu from "../components/menu"

const IndexPage = () => {
  const [entered, triggerEntered] = useState(false)

  const handleEnter = () => {
    triggerEntered(true)
    const audio = document.getElementById("current-song")
    audio.play()
  }

  return (
    <AnimatePresence>
      {!entered ? (
        <motion.div
          key="loadscreen"
          style={{ position: "absolute", width: "100vw", height: "100vh" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, delay: 2 }}
        >
          <LoadScreen handleEnter={handleEnter} />
        </motion.div>
      ) : null}
      <Layout>
        {props => (
          <>
            <SEO title="Home" />
            <AnimatePresence exitBeforeEnter>
              {props.menu ? (
                <motion.div
                  className="album-menu"
                  key="menu-wrapper"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{
                    duration: 0.85,
                    type: "spring",
                    bounce: 0,
                  }}
                >
                  <Menu
                    key="menu-content"
                    menu={props.menu}
                    closeMenu={props.closeMenu}
                    changeAlbum={props.handleAlbumChange}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            {entered ? (
              <Scene>
                <Clip url={props.url} album={props.album} key={props.url} />
              </Scene>
            ) : null}
          </>
        )}
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
