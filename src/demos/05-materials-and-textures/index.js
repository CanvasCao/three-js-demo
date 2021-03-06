import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Box from "../objects/Box";
import Orbit from "../objects/Orbit";
import Plane from "../objects/Plane";
import Background from "../objects/Background";

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas style={{background: 'black'}}
                    camera={{position: [10, 10, 10], fov: 60}}
                    shadows
            >
                {/*<fog attach={'fog'} args={['white', 1, 20]}/>*/}

                <ambientLight intensity={0.2}/>
                <pointLight intensity={1} castShadow position={[0, 10, 0]}/>

                {/*<Suspense fallback={null}>*/}
                {/*    <Background src='shanghai.jpeg'/>*/}
                {/*</Suspense>*/}

                <Suspense fallback={null}>
                    <Box position={[0, 2, 0]}
                        // materialProps={{fog:true}}
                        // materialProps={{opacity: 0.2, transparent: true}}
                        // materialProps={{visible:false}}
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