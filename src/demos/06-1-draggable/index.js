import React, {Suspense, useRef} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";
import Plane from "../objects/Plane";
import * as THREE from 'three'
import Draggable from "../objects/Draggable";


const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>

                <Draggable>
                    <Box position={[0, 1, 1]}/>
                </Draggable>

                <Plane position={[0, -0.5, 0]}/>

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index