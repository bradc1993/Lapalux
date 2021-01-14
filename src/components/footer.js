import React, { useEffect, useRef, useState } from "react"

import SpotifyIcon from "../images/spotify.png"
import InstagramIcon from "../images/instagram.png"
import FacebookIcon from "../images/facebook.png"
import TwitterIcon from "../images/twitter.png"
import VolumeUpIcon from "../images/volume-unmute.png"
import VolumeMuteIcon from "../images/volume-mute.png"

import Silence from "../audio/silence.mp3"
import LimbToLimb from "../audio/limb-to-limb.mp3"

const Footer = () => {
  const [songPlay, toggleSongPlay] = useState(false)
  const audioRef = useRef()

  const handleClick = () => {
    if (!songPlay) {
      toggleSongPlay(true)
      audioRef.current.play()
    } else {
      toggleSongPlay(false)
      audioRef.current.pause()
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
        <iframe
          src={Silence}
          allow="autoplay"
          style={{ display: "none" }}
        ></iframe>
        <audio ref={audioRef} autoPlay preload>
          <source src={LimbToLimb} type="audio/mp3" />
        </audio>
        {/* <img
          id="volume-icon"
          onClick={() => handleClick()}
          src={songPlay ? VolumeUpIcon : VolumeMuteIcon}
          alt="Click to play song."
        /> */}
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
