import React from "react";
import {useBox} from "@react-three/cannon";

const PhysicsPlane = (props) => {
    const args = [10, 0.1, 10]
    const [ref, api] = useBox(() => ({args, ...props}));
    return (
        <mesh
            ref={ref}
            {...props}
            receiveShadow
        >
            <boxBufferGeometry args={args}/>
            <meshPhysicalMaterial color="white"/>
        </mesh>
    )
}
export default PhysicsPlane