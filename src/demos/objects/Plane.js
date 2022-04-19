import React, {useRef} from "react";

const Plane = (props) => {
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