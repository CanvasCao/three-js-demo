import {Physics} from '@react-three/cannon';
import React from 'react'
import {Canvas} from '@react-three/fiber'
import Orbit from "../objects/Orbit";
import Draggable from "../objects/Draggable";
import PhysicsBox from "../objects/physics/PhysicsBox";
import PhysicsPlane from "../objects/physics/PhysicsPlane";
import Plane from "../objects/Plane";
import Box from "../objects/Box";

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}
                    shadows
            >
                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>

                {/*<Physics>*/}
                    <Draggable>
                        <Box args={[1,1,1]} position={[-1, 5, 1]} materialProps={{color: 'blue'}}/>
                    </Draggable>
                    <Plane geometryProps={{args: [10, 0.1, 10]}} position={[0, -0.5, 0]}/>
                {/*</Physics>*/}

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index