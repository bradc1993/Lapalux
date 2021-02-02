import React, { useState, useEffect, useRef } from "react"
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
  overflow-x: hidden;
  pointer-events: auto;
`

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`

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

const handleScroll = (ref, setTranslateX) => {
  const offsetTop = -ref.current.offsetTop
  setTranslateX(offsetTop)
}

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null)
  const [translateX, setTranslateX] = useState(0)

  const containerRef = useRef(null)
  const objectRef = useRef(null)

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight)
  }

  const scrollHandler = () => {
    handleScroll(containerRef, setTranslateX)
  }

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight)
    window.addEventListener("resize", resizeHandler)
    // applyScrollListener(containerRef, setTranslateX)
    window.addEventListener("scroll", scrollHandler)

    return function cleanup() {
      window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  )
}
