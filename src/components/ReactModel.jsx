import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import React3D from './React3D'

function ReactModel() {
    return <Canvas>
        <Suspense fallback={null}>
            <Stage environment={"city"} intensity={0.6}>
                <React3D />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
    </Canvas>
}

export default ReactModel
