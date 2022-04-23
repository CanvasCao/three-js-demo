import React, {Suspense, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import Orbit from "../objects/Orbit";
import Draggable from "../objects/Draggable";
import PhysicsBox from "../objects/physics/PhysicsBox";
import PhysicsPlane from "../objects/physics/PhysicsPlane";
import Plane from "../objects/Plane";
import GLTFModel from "../objects/GLTFModel";
import {Physics} from "@react-three/cannon"
import CameraControls from "../objects/CameraControls";

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [100, 100, 100], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>

                <Suspense fallback={null}>
                    <Draggable>
                        <GLTFModel position={[0, 1, 0]} src={'truck/scene.gltf'} scale={0.01}/>
                    </Draggable>
                </Suspense>
                <Plane geometryProps={{args: [10000, 0.1, 10000]}} position={[0, -0.5, 0]}/>

                <CameraControls/>
                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index