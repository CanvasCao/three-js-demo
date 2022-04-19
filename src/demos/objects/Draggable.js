import React, {useEffect, useRef, useState} from "react";
import {extend, useFrame, useThree} from "@react-three/fiber";
import {DragControls} from "three/examples/jsm/controls/DragControls";

extend({DragControls});

const Draggable = (props) => {
    const {camera, gl, scene} = useThree();
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        // We need groupRef to get children
        setObjects(groupRef.current.children);
    }, [])

    useEffect(() => {
        console.log(controlsRef)
        controlsRef.current.addEventListener('hoveron', e => scene.orbitControls.enabled = false);
        controlsRef.current.addEventListener('hoveroff', e => scene.orbitControls.enabled = true);
    }, [objects])

    return (
        <group ref={groupRef}>
            <dragControls
                ref={controlsRef}
                args={[objects, camera, gl.domElement]}
            />
            {props.children}
        </group>
    )
}
export default Draggable