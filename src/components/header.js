import PropTypes from "prop-types"
import React from "react"
import { MorphIcon } from "react-svg-buttons"

const Header = ({ siteTitle, openMenu, menu }) => {
  // const [thickness, changeThickness] = useState(1.5)
  return (
    <header className="header">
      <div className="header--left">
        <h1>{siteTitle}</h1>
        <h2 className="header--link">About</h2>
        <h2 className="header--link">Store</h2>
      </div>
      <div className="header--right">
        <MorphIcon
          type={menu ? "cross" : "bars"}
          color="#FFFFFF"
          size={48}
          thickness={1.5}
          // onMouseEnter={() => changeThickness(2.5)}
          // onMouseLeave={() => changeThickness(1.5)}
          onClick={openMenu}
          className="morph-icon"
        />
        {/* <img
        className="header--icon"
        src={GridIcon}
        alt="Click to display albums."
        onClick={openMenu}
      /> */}
        {/* <h2 id="album-title">Songs</h2> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
