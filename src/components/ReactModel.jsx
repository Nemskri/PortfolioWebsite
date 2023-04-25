import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import React3D from './React3D'

function ReactModel() {
    return <Canvas>
        <Stage environment={"city"} intensity={0.6}>
            <React3D />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
}

export default ReactModel
