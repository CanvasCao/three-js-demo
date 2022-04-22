import React, {useMemo, useRef} from "react";
import {useFrame, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const GLTFModel = (props) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, props.src);
    return (
        <primitive ref={ref} position={props.position} object={gltf.scene} scale={props.scale} dispose={null}/>
    )
}
export default GLTFModel