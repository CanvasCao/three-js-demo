import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Plane = (props) => {
    const mesh = useRef();
    // useFrame((state, delta) => {
    //     mesh.current.rotation.x += 0.01;
    //     mesh.current.rotation.y += 0.01;
    // })
    return (
        <mesh
            {...props}
            receiveShadow
        >
            <boxBufferGeometry args={[10, 0.1, 10]}/>
            <meshPhysicalMaterial color="white" />
        </mesh>
    )
}
export default Plane