import React from "react"
import { motion } from "framer-motion"
import Abyss from "../images/abyss.jpg"

const LoadScreen = ({ handleEnter }) => {
  const line1 = "'And the abyss also "
  const line2 = "gazes into you...'"
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50, skew: -40, rotate: 45 },
    visible: {
      opacity: 1,
      y: 0,
      skew: 0,
      rotate: 0,
    },
  }
  return (
    <div
      className="load-screen"
      key="loading"
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="load-screen--row1">
        <motion.h3
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
        </motion.h3>
        <motion.img
          className="load-screen--img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          src={Abyss}
          alt="Abyss."
        />
      </div>
      <div className="load-screen--btn">
        <motion.button
          className="enter-btn"
          onClick={handleEnter}
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <h4>ENTER</h4>
        </motion.button>
      </div>
    </div>
  )
}

export default LoadScreen
