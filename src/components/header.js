import PropTypes from "prop-types"
import React from "react"
import GridIcon from "../images/grid-vertical-round.png"

const Header = ({ siteTitle, openMenu, album }) => (
  <header className="header">
    <div className="header--left">
      <h1>{siteTitle}</h1>
      <h2>About</h2>
      <h2>Store</h2>
    </div>
    <div className="header--right">
      <img
        className="header--icon"
        src={GridIcon}
        alt="Click to display albums."
        onClick={openMenu}
      />
      <h2 id="album-title">Songs</h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
