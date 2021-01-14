import React from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei"
// import { Html } from "@react-three/drei"
import AmnioverseCover from "../images/amnioverse-cropped.jpg"

const Album = () => {
  const Amnioverse = useTexture(AmnioverseCover)
  const scale = useAspect("cover", 1200, 600)
  return (
    <mesh raycast={meshBounds} scale={scale}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" map={Amnioverse} />
    </mesh>
  )
}

export default Album
