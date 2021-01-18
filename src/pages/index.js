import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import AlbumDisplay from "../components/album-display"
import Album from "../components/album"
import LoadScreen from "../components/load-screen"

const IndexPage = () => {
  const [entered, triggerEntered] = useState(false)

  const handleEnter = () => {
    triggerEntered(true)
    console.log(entered)
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
          transition={{ duration: 1.3 }}
        >
          <LoadScreen handleEnter={handleEnter} />
        </motion.div>
      ) : null}
      <Layout>
        <SEO title="Home" />
        <AlbumDisplay>
          <Album />
        </AlbumDisplay>
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
