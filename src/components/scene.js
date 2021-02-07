import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { Loader } from "@react-three/drei"
import {
  EffectComposer,
  DotScreen,
  ChromaticAberration,
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
        orthographic={true}
        // camera={{ position: [0, 0, 1], far: 1, near: 0.1 }}
        gl={{ antialias: false, alpha: false }}
      >
        <Suspense fallback={"Loading..."}>{children}</Suspense>
        <EffectComposer>
          {/* <SSAO /> */}
          {/* <ToneMapping middleGrey={3} /> */}
          {/* <Scanline /> */}
          {/* <Glitch active /> */}
          {/* <Noise /> */}
          {/* <Pixelation /> */}
          {/* <ChromaticAberration /> */}
          <DotScreen />
          {/* <Grid /> */}
          <ChromaticAberration />
          {/* <Noise /> */}
          {/* <Bloom /> */}
          {/* <Scanline /> */}
        </EffectComposer>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Scene
