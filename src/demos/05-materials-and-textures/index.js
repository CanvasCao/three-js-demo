import React, {Suspense, useRef} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";
import Plane from "../objects/Plane";


const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [5, 5, 5], fov: 60}}
                    shadows
            >
                {/*<fog attach={'fog'} args={['white', 1, 20]}/>*/}

                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>
                <Suspense fallback={null}>
                    <Box position={[0, 2, 0]}
                        // materialProps={{opacity: 0.2, transparent: true}}
                        // materialProps={{visible:false}}
                        // materialProps={{fog:true}}
                        // materialProps={{wireframe:true}}
                    />
                </Suspense>
                <Plane position={[0, -0.5, 0]}/>

                <Orbit/>
                <axesHelper args={[5]}/>
            </Canvas>
        </div>
    )
}

export default Index