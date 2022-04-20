import React, {useMemo, useRef} from "react";
import {useFrame, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {usePersonControls} from "../../hooks/usePersonControls";

const GLTFModel = (props) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, props.src);
    const movement = usePersonControls();

    useFrame((state, delta) => {
        if (movement.forward) {
            ref.current.position.z += 0.1;
        }
        if (movement.backward) {
            ref.current.position.z -= 0.1;
        }
        if (movement.left) {
            ref.current.position.x += 0.1;
        }
        if (movement.right) {
            ref.current.position.x -= 0.1;
        }
    })

    return (
        <>
            <primitive ref={ref} object={gltf.scene} position={props.scale} scale={props.scale} dispose={null}/>
        </>
    )
}
export default GLTFModel