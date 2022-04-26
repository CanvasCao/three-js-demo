import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from 'three';
import {useBox} from "@react-three/cannon";

const PhysicsBox = (props) => {
    const args = props.args || [1, 1, 1];
    const [ref, api] = useBox(() => ({mass: 1, ...props}));
    let rotation = {x: 0, y: 0, z: 0};
    useFrame((state, delta) => {
        // rotation.x += 0.01;
        // rotation.y += 0.01;
        // api.rotation.copy({x: rotation.x, y: rotation.y, z: 0})
        // api.rotation.set(Math.random(), Math.random(), Math.random())
    })

    const {materialProps, ...meshProps} = props;

    return (
        <mesh
            ref={ref}
            api={api}
            {...meshProps}
            scale={1}
            castShadow
            receiveShadow
        >
            <boxGeometry args={args}/>
            <meshPhysicalMaterial
                {...materialProps}
                color={materialProps?.color || 'blue'}
            />
        </mesh>
    )
}
export default PhysicsBox