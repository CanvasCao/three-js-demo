import React, {Suspense, useRef} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";
import Plane from "../objects/Plane";
import Background from "../objects/Background";
import Earth from "../objects/Earth";


const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.8}/>

                <Suspense fallback={null}>
                    <Earth/>
                </Suspense>

                <Suspense fallback={null}>
                    <Background url='space.png'/>
                </Suspense>

                <Orbit/>
            </Canvas>
        </div>
    )
}

export default Index