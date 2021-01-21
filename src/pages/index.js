import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import AlbumDisplay from "../components/album-display"
import Album from "../components/album"
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
            {props.menu ? (
              <Menu
                closeMenu={props.closeMenu}
                changeAlbum={props.handleAlbumChange}
              />
            ) : null}
            {entered ? (
              <AlbumDisplay>
                <Album url={props.url} album={props.album} key={props.url} />
              </AlbumDisplay>
            ) : null}
          </>
        )}
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
