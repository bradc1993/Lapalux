import React from "react"

import SpotifyIcon from "../images/spotify.png"
import InstagramIcon from "../images/instagram.png"
import FacebookIcon from "../images/facebook.png"
import TwitterIcon from "../images/twitter.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--left">
        <a
          href="https://open.spotify.com/artist/46Ce0QmI1mE2bl5VQ4P9N8"
          target="_blank"
          rel="noreferrer"
          style={{width: "100%"}}
        >
          <img className="footer--icon" src={SpotifyIcon} alt="Spotify" />
        </a>
        <img className="footer--icon" src={InstagramIcon} alt="Instagram" />
        <img className="footer--icon" src={FacebookIcon} alt="Facebook" />
        <img className="footer--icon" src={TwitterIcon} alt="Twitter" />
      </div>
    </footer>
  )
}

export default Footer
