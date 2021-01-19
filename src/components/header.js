import PropTypes from "prop-types"
import React from "react"
import GridIcon from "../images/grid-vertical-round.png"

const Header = ({ siteTitle, openMenu }) => (
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
      <h2 id="album-title">Amnioverse</h2>
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
