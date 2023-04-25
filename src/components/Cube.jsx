import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'



function Cube() {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach={"map"}>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 5]}
                    />
                    <color attach={"background"} args={["pink"]} />
                    <Text fontSize={2} color={"#555"} ref={textRef}>
                        THINK
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube
