import React, {useRef,useMemo} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";


// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({OrbitControls})

const Triangle = ({ vertices }) => {
    const f32array = useMemo(
        () =>
            Float32Array.from(
                new Array(vertices.length)
                    .fill()
                    .flatMap((item, index) => vertices[index].toArray())
            ),
        [vertices]
    );

    return (
        <mesh position={[0, 0, 0]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={["attributes", "position"]}
                    args={[f32array, 3]}
                />
            </bufferGeometry>
            <meshBasicMaterial
                attach="material"
                color="#5243aa"
                wireframe={false}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};


const Orbit = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {camera, gl} = useThree();

    // Ref to the controls, so that we can update them on every frame using useFrame
    // const controls = useRef();
    // useFrame((state) => controls.current.update());
    return (
        <orbitControls
            // ref={controls}
            args={[camera, gl.domElement]}/>
    )
};


const Index = () => {
    const vertices = [
        new THREE.Vector3(0, 20, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(20, 0, 0)
    ];

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}} camera={{position: [10, 10, 10]}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>

                <Orbit/>
                <axesHelper args={[5]}/>

                <Triangle vertices={vertices} />
            </Canvas>

        </div>
    )
}

export default Index