import React, { useState } from "react"

import SpotifyIcon from "../images/spotify.png"
import InstagramIcon from "../images/instagram.png"
import FacebookIcon from "../images/facebook.png"
import TwitterIcon from "../images/twitter.png"
import PlayingIcon from "../assets/vol-play.svg"
import PausedIcon from "../assets/vol-mute.svg"

import LimbToLimb from "../audio/limb-to-limb.mp3"

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
        <audio id="current-song" preload="true">
          <source src={LimbToLimb} type="audio/mp3" />
        </audio>
        <div className="volume-icon" onClick={() => togglePause()}>
          {isPlaying ? <PlayingIcon /> : <PausedIcon />}
        </div>
        <h2 id="now-playing">
          NOW PLAYING -{" "}
          <span id="song-title-wrapper">
            <span id="song-title-inner">Limb to Limb (ft. Lilia)</span>
          </span>
        </h2>
      </div>
    </footer>
  )
}

export default Footer
