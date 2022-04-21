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
        // console.log(controlsRef)
        controlsRef.current.addEventListener('hoveron', e =>
            scene.orbitControls.enabled = false
        );
        controlsRef.current.addEventListener('hoveroff', e => scene.orbitControls.enabled = true);

        // Physics event
        controlsRef.current.addEventListener('dragstart',
            e => e.object.api?.mass.set(0)
        );
        controlsRef.current.addEventListener('dragend',
            e => e.object.api?.mass.set(1)
        );
        controlsRef.current.addEventListener('drag',
            e => e.object.api?.position.copy(e.object.position)
        );

    }, [objects, scene])

    return (
        <group ref={groupRef}>
            <dragControls
                transformGroup
                ref={controlsRef}
                args={[objects, camera, gl.domElement]}
            />
            {props.children}
        </group>
    )
}
export default Draggable