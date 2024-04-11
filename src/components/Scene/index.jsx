import { Canvas } from '@react-three/fiber';
// import { PresentationControls,Environment,OrbitControls } from '@react-three/drei'
import { PresentationControls } from '@react-three/drei';

import Level from './House/Level'
import Sudo from './House/Sudo'
import Camera from './House/Camera'
import Cactus from './House/Cactus'
import Icon from './House/Icon'
import Pyramid from './House/Pyramid'
// import {HouseReal} from './HouseReal'
import People from './People'
import {Suspense, useEffect, useState} from 'react'

export default function Scene() {
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener('resize',Resize)
        return ()=>{
            window.removeEventListener('resize',Resize)
        }
    },[])
    const Resize = ()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    return (
        <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}
                style={{height:height,width:width,
                    touchAction:'none'
                    }}>
            <color attach="background" args={['#ffffff']} />
            <ambientLight />
            <PresentationControls global rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
            {/*<OrbitControls>*/}
                <group position-y={-1.05} dispose={null}>
                    <Level />
                    <Sudo />
                    <Camera />
                    <Cactus />
                    <Icon />
                    <Pyramid />
                    {/* <HouseReal/> */}
                    {/* <Environment preset="sunset" background /> */}

                </group>
                <group position={[0, -0.9, 0.5]} scale={0.7}>
                    <Suspense fallback={null}>
                        <People />
                    </Suspense>
                </group>
                <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
                    <planeBufferGeometry args={[10, 10, 1, 1]} />
                    <shadowMaterial transparent opacity={0.2} />
                </mesh>
            {/*</OrbitControls>*/}
            </PresentationControls>
        </Canvas>
    )
}
