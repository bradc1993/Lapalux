import React, { useEffect, useState } from "react"
import { useSongContext } from "./store"
import { useEnteredContext } from "./store"
import { motion } from "framer-motion"
import { isMobile, isBrowser } from "react-device-detect"

import SpotifyIcon from "../images/spotify.png"
import InstagramIcon from "../images/instagram.png"
import FacebookIcon from "../images/facebook.png"
import TwitterIcon from "../images/twitter.png"
// import PlayingIcon from "../assets/vol-play.svg"
// import PausedIcon from "../assets/vol-mute.svg"
import PlayingIcon from "../images/playing-icon.png"
import PausedIcon from "../images/paused-icon.png"

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

const Footer = ({ onAboutPage }) => {
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
  // useEffect(() => {
  //   function muteAudio() {
  //     const audio = document.getElementById("current-song")
  //     isMobile && !isBrowser && document.visibilityState !== "visible"
  //       ? audio.pause()
  //       : audio.play()
  //   }
  //   document.addEventListener("visibilitychange", muteAudio)

  //   return function removeListener() {
  //     document.removeEventListener("visibilitychange", muteAudio)
  //   }
  // })

  const entered = useEnteredContext()
  const { state } = useSongContext()
  const song = state["song"]

  const variants = {
    visible: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1.3,
      },
    },
    hidden: { y: "10vh" },
  }
  return (
    <footer className="footer">
      {entered || onAboutPage ? (
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
          <motion.div
            className="audio-container"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <div className="volume-icon" onClick={() => togglePause()}>
              {isPlaying ? (
                <img
                  className="volume-icon--png"
                  src={PlayingIcon}
                  alt="Click to mute audio."
                />
              ) : (
                <img
                  className="volume-icon--png"
                  src={PausedIcon}
                  alt="Click to unmute icon."
                />
              )}
            </div>
            <h6 id="now-playing">
              <span id="now-playing--text">
                {isMobile ? null : "NOW PLAYING - "}
              </span>
              <span id="song-title-wrapper">
                <span id="song-title-inner">{song}</span>
              </span>
            </h6>
          </motion.div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
