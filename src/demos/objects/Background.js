import React, {useMemo} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import * as THREE from 'three';

const Background = (props) => {
    const texture = useLoader(THREE.TextureLoader, props.src);
    const {gl} = useThree();


    // https://polyhaven.com/hdris you can download image from here
    // https://www.trekview.org/blog/2021/projection-type-360-photography/


    const formatted = useMemo(() =>
            new THREE.WebGLCubeRenderTarget(texture.image.height)
                .fromEquirectangularTexture(gl, texture)
        , []);

    return (
        <primitive
            attach='background'
            object={formatted.texture}
        ></primitive>
    )
}
export default Background