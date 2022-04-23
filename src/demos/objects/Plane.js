import React, {useRef} from "react";

const Plane = (props) => {
    const {geometryProps,...meshProps}=props;
    return (
        <mesh
            {...meshProps}
            receiveShadow
        >
            <boxBufferGeometry args={[10, 0.1, 10]} {...geometryProps} />
            <meshPhysicalMaterial color="white" />
        </mesh>
    )
}
export default Plane