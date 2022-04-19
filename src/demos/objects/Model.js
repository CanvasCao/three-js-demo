import React, {Suspense, useRef} from "react";
import {useFrame, useLoader, useThree} from "@react-three/fiber";
import * as THREE from 'three';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import Draggable from "./Draggable";

const Model = (props) => {
    const ref = useRef();
    const fbx = useLoader(FBXLoader, 'Fox.fbx');
    useFrame((state, delta) => {
        console.log(ref)
        // ref.current.position.x += 0.01;
        ref.current.position.z += 0.01;
        ref.current.rotation.x = 1;
    })

    const {materialProps, ...meshProps} = props;

    return (
        <Suspense fallback={null}>
            <primitive ref={ref} rotate={[0, 0, 90]} object={fbx} scale={0.01}/>
        </Suspense>
    )
}
export default Model