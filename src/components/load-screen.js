import React, { useEffect } from "react"
import { useEnteredUpdateContext } from "./store"
import { motion } from "framer-motion"
import Spinner from "../images/limb-3d.gif"
import DoorIcon from "../assets/exit.svg"
import { isMobile } from "react-device-detect"

const LoadScreen = () => {
  // const line1 = "'And the abyss also "
  // const line2 = "gazes into you...'"
  // const sentence = {
  //   hidden: { opacity: 1 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delay: 0.5,
  //       staggerChildren: 0.08,
  //     },
  //   },
  // }
  // const letter = {
  //   hidden: { opacity: 0, y: 50, skew: -40, rotate: 45 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     skew: 0,
  //     rotate: 0,
  //   },
  // }
  useEffect(() => {
    const audio = document.getElementById("current-song")
    audio.pause()
  }, [])
  const handleEnter = useEnteredUpdateContext()
  return (
    <div className="load-screen">
      <div className="load-screen--row1">
        {/* <motion.h3
          className="load-screen--message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h3> */}
        <motion.img
          className="load-screen--img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ scale: 2.5, y: 100 }}
          src={Spinner}
          alt="Abyss."
        />
      </div>
      <div className="load-screen--btn">
        <motion.button
          className="enter-btn"
          onClick={() => handleEnter()}
          type="button"
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "inline-block" }}
          exit={{ y: 1500 }}
          transition={{ duration: 2 }}
        >
          <h4>ENTER</h4>
          <DoorIcon />
        </motion.button>
        {isMobile && (
          <motion.h6
            style={{ fontSize: "calc(0.5rem + 1vw)" }}
            initial={{ opacity: 0, display: "none" }}
            animate={{
              opacity: 1,
              display: "inline-block",
              transition: { duration: 2.3 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            Please disable low power mode on your device.
          </motion.h6>
        )}
      </div>
    </div>
  )
}

export default LoadScreen
