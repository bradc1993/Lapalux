import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import {
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
  DotScreen,
  Pixelation,
  ChromaticAberration,
} from "@react-three/postprocessing"

const AlbumDisplay = ({ children }) => {
  return (
    <div className="canvas-wrapper">
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <EffectComposer>
          <Noise />
          {/* <Pixelation /> */}
          <DotScreen />
          <ChromaticAberration />
          {/* <Scanline /> */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default AlbumDisplay
