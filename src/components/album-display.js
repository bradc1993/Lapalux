import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import {
  EffectComposer,
  Noise,
  Vignette,
  ToneMapping,
  SSAO,
  Scanline,
  Glitch,
  DotScreen,
} from "@react-three/postprocessing"

const AlbumDisplay = ({ children }) => {
  return (
    <div className="canvas-wrapper">
      <Canvas
        // colorManagement
        camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        gl={{ antialias: "false", alpha: "false" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        {/* <EffectComposer> */}
          {/* <SSAO /> */}
          {/* <Vignette offset={0.7} /> */}
          {/* <ToneMapping adaptationRate={0.2} /> */}
          {/* <Scanline /> */}
          {/* <Glitch active /> */}
          {/* <Noise /> */}
          {/* <Pixelation /> */}
          {/* <DotScreen /> */}
          {/* <ChromaticAberration /> */}
          {/* <Scanline /> */}
        {/* </EffectComposer> */}
      </Canvas>
    </div>
  )
}

export default AlbumDisplay
