import React, { useState } from "react"
import { useSongContext } from "./store"

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

  const { state } = useSongContext()
  return (
    <footer className="footer">
      <div className="footer--left">
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
      </div>
      <div className="footer--audio-player">
        <audio
          id="current-song"
          preload="true"
          loop
          autoPlay
          src={
            state === "Limb to Limb (ft. Lilia)"
              ? LimbToLimb
              : state === "Oblivion"
              ? Oblivion
              : state === "Voltaic Acid"
              ? VoltaicAcid
              : state === "Momentine"
              ? Momentine
              : state === "Earth"
              ? Earth
              : state === "Hellix"
              ? Hellix
              : state === "Thin Air (ft. JFDR)"
              ? ThinAir
              : state === "The Lux Quadrant (ft. JFDR)"
              ? LuxQuadrant
              : state === "Amnioverse"
              ? Amnioverse
              : Esc
          }
        />
        <div className="volume-icon" onClick={() => togglePause()}>
          {isPlaying ? <PlayingIcon /> : <PausedIcon />}
        </div>
        <h2 id="now-playing">
          NOW PLAYING -{" "}
          <span id="song-title-wrapper">
            <span id="song-title-inner">{state.toString()}</span>
          </span>
        </h2>
      </div>
    </footer>
  )
}

export default Footer
