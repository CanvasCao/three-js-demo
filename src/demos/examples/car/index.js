// This demo is also playable without installation here:
// https://codesandbox.io/s/basic-demo-forked-ebr0x

import {Physics, useCylinder, usePlane} from '@react-three/cannon'
import {Environment, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {Suspense, useRef} from 'react'
import Vehicle from './Vehicle'
import BoundingBox from "../../objects/physics/BoundingBox";
import GLTFModel from "../../objects/GLTFModel";
import Draggable from "../../objects/Draggable";

function Plane(props) {
    const [ref] = usePlane(() => ({material: 'ground', type: 'Static', ...props}), useRef(null))
    return (
        <group ref={ref}>
            <mesh receiveShadow>
                <planeGeometry args={[100, 100]}/>
                <meshStandardMaterial color="#303030"/>
            </mesh>
        </group>
    )
}

const Index = () => {
    return (
        <>
            <div style={{height: '100vh', width: '100vw'}}>
                <Canvas shadows camera={{fov: 50, position: [0, 5, 15]}}>
                    <color attach="background" args={['#171720']}/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1}/>
                    <Physics
                        broadphase="SAP"
                        defaultContactMaterial={{contactEquationRelaxation: 4, friction: 1e-3}}
                        allowSleep
                    >
                        <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{id: 'floor'}}/>
                        <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]}/>
                        <BoundingBox
                            boxArgs={[1.2, 1.4, 1.4]}
                            offset={[0, 0.4, 0.5]}
                            position={[-5, 10, 0]}
                            visible
                        >
                            <GLTFModel src={'shiba/scene.gltf'} scale={1}/>
                        </BoundingBox>
                    </Physics>
                    <Suspense fallback={null}>
                        <Environment preset="night"/>
                    </Suspense>
                    <OrbitControls/>
                </Canvas>
            </div>
        </>
    )
}

export default Index
