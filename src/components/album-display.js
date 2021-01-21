import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "react-three-fiber"
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
import { BlendFunction } from "postprocessing"
import { OrbitControls } from "@react-three/drei"

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree()

//   const controls = useRef()
//   useEffect(() => console.log(controls.current), [])
//   useFrame(() => controls.current.update())
//   return <OrbitControls ref={controls} args={[camera, domElement]} />
// }

const AlbumDisplay = ({ children }) => {
  return (
    <div className="canvas-wrapper">
      <Canvas
        // colorManagement={false}
        // camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        // gl={{ antialias: "false", alpha: "false" }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <EffectComposer>
          {/* <SSAO /> */}
          <Vignette offset={0.7} />
          <ToneMapping adaptationRate={0.2} />
          {/* <Scanline /> */}
          {/* <Glitch active /> */}
          <Noise />
          {/* <Pixelation /> */}
          {/* <DotScreen /> */}
          {/* <ChromaticAberration /> */}
          {/* <Scanline /> */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default AlbumDisplay
