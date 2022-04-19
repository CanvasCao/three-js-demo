import React, {useMemo} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import * as THREE from 'three';

const Background = (props) => {
    const texture = useLoader(THREE.TextureLoader, props.url);
    const {gl} = useThree();

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