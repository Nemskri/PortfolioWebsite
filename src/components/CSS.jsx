import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Css3D from './Css3D'

function CSS() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment={"city"} intensity={0.6}>
          <Css3D />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Suspense>
    </Canvas>
  )
}

export default CSS
