import React, {Suspense, useEffect, useRef, useState} from "react";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {useLoader} from '@react-three/fiber'

const FBXModel = (props) => {
    const ref = useRef();
    const fbx = useLoader(FBXLoader, 'fox/fox.fbx');
    const {materialProps, ...meshProps} = props;

    return (
        <primitive ref={ref} object={fbx} scale={1}/>
    )


}
export default FBXModel