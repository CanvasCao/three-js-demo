import React from "react";
import {useBox} from "@react-three/cannon";

const BoundingBox = (
    {
        position = [0, 0, 0],
        offset = [0, 0, 0],
        boxArgs = [1, 1, 1],
        rotation = [0, 0, 0],
        visible = false,
        mass = 10,
        children,
    }) => {
    const [boxRef, api] = useBox(() => ({
        mass,
        args: boxArgs,
        position,
        rotation,
    }));

    return (
        <group ref={boxRef} api={api}>
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