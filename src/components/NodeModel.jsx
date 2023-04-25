import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Node from './Node'


function NodeModel() {
  return (
    <Canvas>
       <Suspense fallback={null}>
      <Stage environment={"city"} intensity={0.6}>
        <Node />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
       </Suspense>
    </Canvas>
  )
}

export default NodeModel
