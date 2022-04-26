import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from 'three';

const Box = (props) => {
    const ref = useRef();

    // const texture = useLoader(THREE.TextureLoader,'metal.jpeg');
    // const texture = useLoader(THREE.TextureLoader,'wood.jpeg');

    useFrame((state, delta) => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    })

    const {materialProps, ...meshProps} = props;
    return (
        <mesh
            {...meshProps}
            ref={ref}
            scale={1}
            // castShadow
            // receiveShadow
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshPhysicalMaterial
                {...materialProps}
                color={materialProps?.color || 'blue'}
                // map={texture}
            />
        </mesh>
    )
}
export default Box