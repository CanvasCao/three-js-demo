import {extend, useThree} from "@react-three/fiber";
import React from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({OrbitControls})

const Orbit = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {camera, gl} = useThree();

    // Ref to the controls, so that we can update them on every frame using useFrame
    // const controls = useRef();
    // useFrame((state) => controls.current.update());
    return (
        <orbitControls
            // ref={controls}
            args={[camera, gl.domElement]}/>
    )
};

export default Orbit