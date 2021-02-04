import React, { useState, useEffect, useRef } from "react"
import {
  motion,
  useMotionValue,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import styled from "styled-components"

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
  pointer-events: none;
`

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 7.5vh;
  height: 85vh;
  width: 100%;
  overflow: hidden;
  pointer-events: auto;
`

// const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
//   style: { transform: `translateX(${translateX}px)` },
// }))`
//   position: absolute;
//   height: 100%;
//   will-change: transform;
// `

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 150
}

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth
  const dynamicHeight = calcDynamicHeight(objectWidth)
  setDynamicHeight(dynamicHeight)
}

// const handleScroll = (ref, translateX) => {
//   const offsetTop = -ref.current.offsetTop
//   translateX.set(offsetTop)
// }

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  // const [translateX, setTranslateX] = useState(0)
  const { scrollY } = useViewportScroll()
  const transform = useTransform(
    scrollY,
    [0, dynamicHeight],
    [0, -dynamicHeight]
  )
  const physics = { damping: 10, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  const containerRef = useRef(null)
  const objectRef = useRef(null)

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  // const scrollHandler = () => {
  //   handleScroll(containerRef, translateX)
  // }

  useEffect(() => {
    document.body.style.overflowY = "overlay"
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener("resize", resizeHandler)
    // applyScrollListener(containerRef, setTranslateX)
    // window.addEventListener("scroll", scrollHandler)

    return function cleanup() {
      document.body.style.overflow = "hidden"
      // window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <motion.div
          ref={objectRef}
          style={{ x: spring, position: "absolute", height: "100%" }}
        >
          {children}
        </motion.div>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}
