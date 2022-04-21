import React from "react";
import {useBox} from "@react-three/cannon";

const BoundingBox = (
    {
        position = [0, 0, 0],
        offset = [0, 0, 0],
        boxArgs = [1, 1, 1],
        visible = false,
        mass = 1,
        children,
    }) => {
    const [ref, api] = useBox(() => ({mass, args: boxArgs, position}));
    return (
        <group ref={ref} api={api}>
            <mesh
                scale={boxArgs}
                visible={visible}
            >
                <boxBufferGeometry/>
                <meshPhysicalMaterial wireframe/>
            </mesh>
            <group position={offset}>{children}</group>
        </group>


    )
}
export default BoundingBox