// This demo is also playable without installation here:
// https://codesandbox.io/s/basic-demo-forked-ebr0x

import {Physics, usePlane} from '@react-three/cannon'
import {Canvas} from '@react-three/fiber'
import React, {Suspense, useRef} from 'react'
import Vehicle from './Vehicle'
import Orbit from "../../objects/Orbit";
import PhysicsBox from "../../objects/physics/PhysicsBox";

function Plane(props) {
    const [ref] = usePlane(() => ({material: 'ground', type: 'Static', ...props}), useRef(null))
    return (
        <group ref={ref}>
            <mesh receiveShadow>
                <planeGeometry args={[500, 500]}/>
                <meshPhysicalMaterial color="#303030"/>
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
                    <ambientLight intensity={1}/>
                    <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1}/>
                    <Physics
                        broadphase="SAP"
                        defaultContactMaterial={{contactEquationRelaxation: 4, friction: 1e-3}}
                        allowSleep
                    >
                        <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{id: 'floor'}}/>
                        <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]}/>

                        {/*<PhysicsBox position={[0, 0, 9]}*/}
                        {/*            materialProps={{color: '#' + Math.floor(Math.random() * 16777215).toString(16)}}/>*/}
                    </Physics>
                    <Orbit/>
                </Canvas>
            </div>
        </>
    )
}

export default Index
