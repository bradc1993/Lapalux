import React, { Suspense } from "react"
import { Canvas, useFrame, useThree } from "react-three-fiber"
import {
  EffectComposer,
  // Noise,
  // Vignette,
  // ToneMapping,
  // SSAO,
  // Scanline,
  // Glitch,
  DotScreen,
  ChromaticAberration,
  // Pixelation,
  // Bloom,
} from "@react-three/postprocessing"
// import { BlendFunction } from "postprocessing"
// import { Html } from "@react-three/drei"

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

const Scene = ({ children }) => {
  return (
    <div className="canvas-wrapper">
      <Canvas
        colorManagement={false}
        orthographic
        // camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        // gl={{ antialias: "false", alpha: "false" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <EffectComposer>
          {/* <SSAO /> */}
          {/* <Vignette offset={0.9} /> */}
          {/* <ToneMapping adaptationRate={0.2} /> */}
          {/* <Scanline /> */}
          {/* <Glitch active /> */}
          {/* <Noise /> */}
          {/* <Pixelation /> */}
          <DotScreen />
          <ChromaticAberration />
          {/* <Noise /> */}
          {/* <Bloom /> */}
          {/* <Scanline /> */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Scene
