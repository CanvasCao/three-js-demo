import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from 'three';

const Earth = (props) => {
    const ref = useRef();

    const texture = useLoader(THREE.TextureLoader, 'earth.png');
    const {materialProps, ...meshProps} = props;
    return (
        <mesh
            {...meshProps}
            ref={ref}
            scale={1}
            castShadow
            receiveShadow
        >
            <sphereGeometry
                args={[1, 16, 16]}/>
            <meshPhysicalMaterial
                {...materialProps}
                map={texture}
            />
        </mesh>
    )
}
export default Earth