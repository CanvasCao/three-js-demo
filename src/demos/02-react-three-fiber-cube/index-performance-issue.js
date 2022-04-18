import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

function Box(props) {
    const mesh = useRef();
    const [x,setX]=useState(0);

    // useFrame((state, delta) => {
    //     setX(x=>x+0.01);
    // })

    return (
        <mesh
            {...props} 
            ref={mesh}
            scale={2}
            position-x={x}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color='blue'/>
        </mesh>
    )
}

const Index = () => {
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Canvas>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Box position={[0, 0, 0]}/>
            </Canvas>
        </div>
    )
}

export default Index