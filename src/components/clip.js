import React, { useState } from "react"
// import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
// import { Html } from "@react-three/drei"
// import { useFrame } from "react-three-fiber"
// import EarthVideo from "../videos/earth.mp4"
// import LimbVideo from "../videos/limb-clip.mp4"

const Clip = ({ videoLoop }) => {
  // const ref = useRef()
  // const [zoom, toggleZoom] = useState(true)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     toggleZoom(!zoom)
  //   }, 30000)
  //   return () => clearInterval(interval)
  // })

  // const zoomRotate = () => {
  //   ref.current.position.z += 0.00015
  //   // ref.current.rotation.z += 0.00008
  // }

  // useFrame(
  //   () => (zoom ? zoomRotate() : null)
  //   // ref.current.position.z < 0.5 ? (ref.current.position.z += 0.0003) : null
  // )
  // const Limb = LimbVideo
  // const Earth = EarthVideo
  const [x, y] = useAspect("cover", 1920, 1080)

  const [video] = useState(() => {
    const vid = document.createElement("video")
    vid.src = videoLoop
    vid.crossOrigin = "Anonymous"
    vid.loop = true
    vid.autoplay = true
    vid.preload = "auto"
    vid.muted = true
    vid.playsInline = true
    vid.play()
    return vid
  })

  return (
    <mesh scale={[x, y, 1]} raycast={meshBounds}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Clip
