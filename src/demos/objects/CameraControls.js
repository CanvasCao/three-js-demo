import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'
import {useState} from "react";


const CameraControls = ({}) => {
    const [shouldUpdate, setShouldUpdate] = useState(true);

    const newCameraPosition = new THREE.Vector3(-10, 10, 0);
    const targetPosition = new THREE.Vector3(10, 0, 0);
    useFrame(({camera, scene}) => {
        if (shouldUpdate) {
            camera.position.lerp(newCameraPosition, 0.1);
            scene.orbitControls.target.lerp(targetPosition, 0.1)
            scene.orbitControls.update()
            const diff = camera.position.clone().sub(newCameraPosition).length()
            if (diff < 0.01) {
                setShouldUpdate(false);
            }
        }
    })
    return null;
}

export default CameraControls