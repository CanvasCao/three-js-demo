import React, {useRef} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";


const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}} camera={{position: [10, 10, 10]}}>
                <ambientLight/>
                <Box position={[0, 1, 3]}/>

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index