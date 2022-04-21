import React, {useRef} from "react";

const Plane = (props) => {
    const {geometryProps,...meshProps}=props;
    return (
        <mesh
            {...meshProps}
            receiveShadow
        >
            <boxBufferGeometry {...geometryProps}/>
            <meshPhysicalMaterial color="white" />
        </mesh>
    )
}
export default Plane