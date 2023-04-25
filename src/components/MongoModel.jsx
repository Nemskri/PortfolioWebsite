import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Mongo from './Mongo'

function MongoModel() {
  return <Canvas>
    <Suspense fallback={null}>
      <Stage environment={"city"} intensity={0.6}>
        <Mongo />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Suspense>
  </Canvas>
}

export default MongoModel
