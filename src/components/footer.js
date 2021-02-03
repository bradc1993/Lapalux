import React, { useState } from "react"
import { useSongContext } from "./store"
import { useEnteredContext } from "./store"
import { motion } from "framer-motion"

import SpotifyIcon from "../images/spotify.png"
import InstagramIcon from "../images/instagram.png"
import FacebookIcon from "../images/facebook.png"
import TwitterIcon from "../images/twitter.png"
import PlayingIcon from "../assets/vol-play.svg"
import PausedIcon from "../assets/vol-mute.svg"

import LimbToLimb from "../audio/limb-to-limb.mp3"
import Oblivion from "../audio/oblivion.mp3"
import VoltaicAcid from "../audio/voltaic-acid.mp3"
import Momentine from "../audio/momentine.mp3"
import Earth from "../audio/earth.mp3"
import Hellix from "../audio/hellix.mp3"
import ThinAir from "../audio/thin-air.mp3"
import LuxQuadrant from "../audio/the-lux-quadrant.mp3"
import Amnioverse from "../audio/amnioverse.mp3"
import Esc from "../audio/esc.mp3"

const Footer = () => {
  const [isPlaying, toggleIsPlaying] = useState(true)
  const togglePause = () => {
    const audio = document.getElementById("current-song")
    if (isPlaying === true) {
      toggleIsPlaying(false)
      audio.pause()
    } else {
      toggleIsPlaying(true)
      audio.play()
    }
  }

  const entered = useEnteredContext()
  const { state } = useSongContext()
  const song = state["song"]

  const variants = {
    visible: {
      y: 0,
      transition: {
        delay: 2.4,
        duration: 1.2,
      },
    },
    hidden: { y: "10vh" },
  }
  return (
    <footer className="footer">
      {entered ? (
        <motion.div
          className="footer--left"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <a
            className="footer--icon-wrapper"
            href="https://open.spotify.com/artist/46Ce0QmI1mE2bl5VQ4P9N8"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer--icon" src={SpotifyIcon} alt="Spotify" />
          </a>
          <a
            className="footer--icon-wrapper"
            href="https://www.instagram.com/lapaluxmusic/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer--icon" src={InstagramIcon} alt="Instagram" />
          </a>
          <a
            className="footer--icon-wrapper"
            href="https://www.facebook.com/Lapaluxmusic/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer--icon" src={FacebookIcon} alt="Facebook" />
          </a>
          <a
            className="footer--icon-wrapper"
            href="https://twitter.com/lapalux"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer--icon" src={TwitterIcon} alt="Twitter" />
          </a>
        </motion.div>
      ) : null}
      <div className="footer--audio-player">
        <audio
          id="current-song"
          preload="true"
          loop
          autoPlay
          src={
            song === "Limb to Limb (ft. Lilia)"
              ? LimbToLimb
              : song === "Oblivion"
              ? Oblivion
              : song === "Voltaic Acid"
              ? VoltaicAcid
              : song === "Momentine"
              ? Momentine
              : song === "Earth"
              ? Earth
              : song === "Hellix"
              ? Hellix
              : song === "Thin Air (ft. JFDR)"
              ? ThinAir
              : song === "The Lux Quadrant (ft. JFDR)"
              ? LuxQuadrant
              : song === "Amnioverse"
              ? Amnioverse
              : Esc
          }
        />
        {entered ? (
          <motion.div variants={variants} initial="hidden" animate="visible">
            <div className="volume-icon" onClick={() => togglePause()}>
              {isPlaying ? <PlayingIcon /> : <PausedIcon />}
            </div>
            <h2 id="now-playing">
              NOW PLAYING -{" "}
              <span id="song-title-wrapper">
                <span id="song-title-inner">{song}</span>
              </span>
            </h2>
          </motion.div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
