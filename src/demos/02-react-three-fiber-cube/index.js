import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

function Box(props) {
    const mesh = useRef();
    // useFrame((state, delta) => {
    //     mesh.current.rotation.x += 0.01;
    //     mesh.current.rotation.y += 0.01;
    // })
    return (
        <mesh
            {...props}
            ref={mesh}
        >
            {/*boxWidth, boxHeight, boxDepth*/}
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color='blue'/>
        </mesh>
    )
}

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Box position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )
}

export default Index