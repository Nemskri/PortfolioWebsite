import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mongo from './Mongo'

function MongoModel() {
  return <Canvas>
    <Stage environment={"city"} intensity={0.6}>
      <Mongo />
    </Stage>
    <OrbitControls enableZoom={false} autoRotate={true} />
  </Canvas>
}

export default MongoModel
