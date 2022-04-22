import {Physics} from "@react-three/cannon";
import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Orbit from "../objects/Orbit";
import Draggable from "../objects/Draggable";
import PhysicsPlane from "../objects/physics/PhysicsPlane";
import GLTFModel from "../objects/GLTFModel";
import BoundingBox from "../objects/physics/BoundingBox";

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [20, 20, 20], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>

                <Physics>
                    <Suspense fallback={null}>
                        <Draggable>
                            <BoundingBox
                                boxArgs={[5.5, 3, 2]}
                                offset={[0.4, -1, 0]}
                                position={[5, 10, 0]}
                                visible
                                mass={10}
                            >
                                <GLTFModel src={'truck/scene.gltf'} scale={0.01}/>
                            </BoundingBox>
                        </Draggable>
                    </Suspense>
                    <Suspense fallback={null}>
                        <Draggable>
                            <BoundingBox
                                boxArgs={[1.2, 1.4, 1.4]}
                                offset={[0, 0.4, 0.5]}
                                position={[-5, 10, 0]}
                                visible
                            >
                                <GLTFModel src={'shiba/scene.gltf'} scale={1}/>
                            </BoundingBox>
                        </Draggable>
                    </Suspense>
                    <PhysicsPlane geometryProps={{args: [100, 1, 100]}} position={[0, -0.5, 0]}/>
                </Physics>

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index