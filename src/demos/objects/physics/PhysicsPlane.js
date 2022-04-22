import React from "react";
import {useBox} from "@react-three/cannon";

const PhysicsPlane = (props) => {
    const {geometryProps, materialProps, ...meshProps} = props;

    const [ref, api] = useBox(() => ({args: geometryProps.args, ...props}));
    return (
        <mesh
            ref={ref}
            {...meshProps}
            receiveShadow
        >
            <boxBufferGeometry {...geometryProps}/>
            <meshPhysicalMaterial {...materialProps}/>
        </mesh>
    )
}
export default PhysicsPlane