import React from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei"
// import { Html } from "@react-three/drei"
import AmnioverseCover from "../images/amnioverse-cropped.jpg"
import EsrevoinmaCover from "../images/esrevoinma-cropped.jpg"
import AboveCover from "../images/above-between-below-cropped.jpg"
import IndustryCover from "../images/the-end-of-industry-cropped.jpg"
import RuinismCover from "../images/ruinism-cropped.jpg"
import LustmoreCover from "../images/lustmore-edit-2.jpg"
import NostalchicCover from "../images/nostalchic-cropped.jpg"

const Album = ({ album }) => {
  const amnioverse = useTexture(AmnioverseCover)
  const esrevoinma = useTexture(EsrevoinmaCover)
  const above = useTexture(AboveCover)
  const industry = useTexture(IndustryCover)
  const ruinism = useTexture(RuinismCover)
  const lustmore = useTexture(LustmoreCover)
  const nostalchic = useTexture(NostalchicCover)
  const scale = useAspect("cover", 1200, 600)
  return (
    <mesh raycast={meshBounds} scale={scale}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        map={
          album == "Amnioverse"
            ? amnioverse
            : album == "Esrevoinma"
            ? esrevoinma
            : album == "Above_Between_Below"
            ? above
            : album == "The End of Industry"
            ? industry
            : album == "Ruinism"
            ? ruinism
            : album == "Lustmore"
            ? lustmore
            : nostalchic
        }
      />
    </mesh>
  )
}

export default Album
