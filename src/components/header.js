import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
// import { store } from "./store-old"
import { MorphIcon } from "react-svg-buttons"
import { useMenuContext } from "./store"
import { useMenuUpdateContext } from "./store"
import { useEnteredContext } from "./store"

const Header = ({ siteTitle }) => {
  // const [thickness, changeThickness] = useState(1.5)
  const [color, changeColor] = useState("#FFFFFF")

  // const globalState = useContext(store)
  // const { dispatch } = globalState
  const menu = useMenuContext()
  const toggleMenu = useMenuUpdateContext()
  const entered = useEnteredContext()

  const variants = {
    visible: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1.2,
      },
    },
    hidden: { y: "-10vh" },
  }
  return (
    <>
      {entered ? (
        <motion.header
          className="header"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="header--left">
            <h1>{siteTitle}</h1>
            <Link to="/about">
              <h2 className="header--link">About</h2>
            </Link>
            <a
              href="https://lapalux.terriblemerch.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="header--link">Store</h2>
            </a>
          </div>
          <div className="header--right">
            <MorphIcon
              type={menu ? "cross" : "bars"}
              color={color}
              size={48}
              thickness={1.5}
              onMouseEnter={() => changeColor("#FF0000")}
              onMouseLeave={() => changeColor("#FFFFFF")}
              onClick={() => toggleMenu(!menu)}
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
        </motion.header>
      ) : null}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
