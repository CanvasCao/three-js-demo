import React, {Suspense, useRef} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";
import Plane from "../objects/Plane";
import * as THREE from 'three'


const Index = () => {
    const handlePointerDown = e => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        e.object.material.color = new THREE.Color(randomColor)
    }

    const handlePointerEnter = e => {
        e.object.scale.set(2, 2, 2)
    }

    const handlePointerLeave = e => {
        e.object.scale.set(1, 1, 1)
    }

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>


                <Box position={[0, 2, 0]}
                     onPointerDown={handlePointerDown}
                     onPointerEnter={handlePointerEnter}
                     onPointerLeave={handlePointerLeave}

                />

                <Plane position={[0, -0.5, 0]}/>

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index