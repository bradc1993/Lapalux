import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
// import { store } from "./store-old"
import { MorphIcon } from "react-svg-buttons"
import { useMenuContext } from "./store"
import { useMenuUpdateContext } from "./store"
import { useEnteredContext } from "./store"
// import { useMiniMenuContext } from "./store"
// import { useMiniMenuUpdateContext } from "./store"
// import MiniMenu from "./mini-menu"

const Header = ({ siteTitle, onAboutPage }) => {
  // const [thickness, changeThickness] = useState(1.5)
  const [color, changeColor] = useState("#FFFFFF")
  const [linkColor, changeLinkColor] = useState("#FFFFFF")
  // const [fillRed, toggleFillRed] = useState(false)

  // const globalState = useContext(store)
  // const { dispatch } = globalState
  const menu = useMenuContext()
  const toggleMenu = useMenuUpdateContext()
  // const miniMenu = useMiniMenuContext()
  // const toggleMiniMenu = useMiniMenuUpdateContext()
  const entered = useEnteredContext()

  const variants = {
    visible: {
      x: 0,
      y: 0,
      transition: {
        delay: 0,
        duration: 1.3,
      },
    },
    hidden: { y: "-10vh" },
    about: { x: "calc(50vw - 50%)", transition: { duration: 1.8 } },
  }
  return (
    <>
      {entered || onAboutPage ? (
        <motion.header
          className="header"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="header--left">
            <motion.div
              className="title-wrapper"
              variants={variants}
              initial={false}
              animate={onAboutPage ? "about" : "visible"}
            >
              <Link to="/">
                <h1 className="site-title">{siteTitle}</h1>
              </Link>
            </motion.div>
            <motion.div
              className="link-wrapper"
              initial={false}
              animate={
                onAboutPage ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={
                onAboutPage ? { duration: 0.7 } : { delay: 0.7, duration: 0.85 }
              }
            >
              <Link to="/about">
                <h2
                  className="header--link"
                  style={{ color: linkColor }}
                  onTouchStart={() => changeLinkColor("#FF0000")}
                  onTouchEnd={() => changeLinkColor("#FFFFFF")}
                >
                  About
                </h2>
              </Link>
            </motion.div>
            <motion.div
              className="link-wrapper"
              initial={false}
              animate={
                onAboutPage ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={
                onAboutPage
                  ? { delay: 0.3, duration: 0.7 }
                  : { delay: 0.5, duration: 0.85 }
              }
            >
              <a
                href="https://lapalux.terriblemerch.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="header--link">Store</h2>
              </a>
            </motion.div>
          </div>
          <div className="header--right">
            {/* {onAboutPage && miniMenu ? <MiniMenu /> : null} */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={
                onAboutPage ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={
                onAboutPage ? { delay: 0.9, duration: 0.7 } : { duration: 0.85 }
              }
              className="morph-icon-wrapper"
            >
              <MorphIcon
                type={menu ? "cross" : "bars"}
                color={color}
                size={48}
                thickness={1.5}
                onMouseEnter={() => changeColor("#FF0000")}
                onMouseLeave={() => changeColor("#FFFFFF")}
                onTouchStartCapture={() =>
                  changeColor(color === "#FF0000" ? "#FFFFFF" : "#FF0000")
                }
                onClick={() => toggleMenu(!menu)}
                className="morph-icon"
              />
            </motion.div>
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
