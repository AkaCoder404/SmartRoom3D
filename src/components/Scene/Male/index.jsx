import React, { useEffect, useState } from 'react';
import { Text, useAnimations, useGLTF, useTexture } from "@react-three/drei";
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
// import { useLoader } from '@react-three/fiber'

import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import node from "three/examples/jsm/nodes/core/Node";
// import { a } from "@react-spring/three";
// import { CSS2DObject } from "three-stdlib";
// import { position } from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";


function Index(props) {
    const { nodes, animations } = useGLTF('/models/male_G_inplace.glb')


    // const male = useRef(null)
    const { actions, ref, names } = useAnimations(animations)
    // const [mixer,setMixer] = useState(()=>new THREE.AnimationMixer(undefined));
    // const [actions,setActions] = useState(()=>{
    //     return {
    //         idle: mixer.clipAction(animations[0],nodes.idle),
    //         sit: mixer.clipAction(animations[1],nodes.idle),
    //         walk: mixer.clipAction(animations[2],nodes.idle),
    //         walk2: mixer.clipAction(animations[2],nodes.idle)
    //
    //     }
    // })
    // console.log(actions)
    const [moveLeft, setMoveLeft] = useState(false)
    const [moveRight, setMoveRight] = useState(false)
    const [moveUp, setMoveUp] = useState(false)
    const [moveDown, setMoveDown] = useState(false)
    const [isIdling, setIdle] = useState(true)
    const [isSitting, setSit] = useState(false)
    const [currentAction, setCurrentAction] = useState(undefined)
    const [preAction, setPreAction] = useState(undefined)
    const [speed, setSpeed] = useState(0.03)

    const [colorMap, normalMap] = useTexture([
        '/models/_MainTex.jpg',
        '/models/_MainTex.jpg',
    ])


    useFrame(() => {
        updateMobile(speed);
        // console.log(ref)
        // pplDiv.textContent = ref.current.position.x + ', ' + ref.current.position.z;

    })
    const mobile = () => {
        let onKeyDown = (event) => {
            switch (event.keyCode) {
                case 38:    // up
                case 87:    // w
                    setMoveUp(true)
                    setIdle(false);
                    break;
                case 40:    // down
                case 83:    // s
                    setMoveDown(true)
                    setIdle(false);
                    break;
                case 37:    // left
                case 65:    // a
                    setMoveLeft(true)
                    setIdle(false);
                    break;

                case 39:    // right
                case 68:    // d
                    setMoveRight(true)
                    setIdle(false);
                    break;
            }
        };

        let onKeyUp = (event) => {
            switch (event.keyCode) {

                case 38:    // up
                case 87:    // w
                    setMoveUp(false)
                    break;

                case 40:    // down
                case 83:    // s
                    setMoveDown(false)
                    break;

                case 37:    // left
                case 65:    // a
                    setMoveLeft(false)
                    break;

                case 39:    // right
                case 68:    // d
                    setMoveRight(false)
                    break;
            }
        };

        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
    }
    const updateMobile = (speed) => {
        if (isSitting) {
            fadeToAction('sit', 0.2);
        }
        if (moveUp) {
            // w, up
            fadeToAction('walk', 0.2);
            ref.current.position.z -= speed;
            ref.current.children[0].rotation.z = Math.PI;
        }
        if (moveDown) {
            // s, down
            fadeToAction('walk', 0.2);
            ref.current.position.z += speed;
            ref.current.children[0].rotation.z = Math.PI * 2;
        }
        if (moveLeft) {
            // d, left
            fadeToAction('walk', 0.2);
            ref.current.position.x -= speed;
            ref.current.children[0].rotation.z = Math.PI * 0.5;
        }
        if (moveRight) {
            // a, right
            fadeToAction('walk', 0.2);
            ref.current.position.x += speed;
            ref.current.children[0].rotation.z = Math.PI * 1.5;
        }
        if (!moveUp && !moveDown && !moveLeft && !moveRight && (!isIdling || !isSitting && isIdling)) {
            fadeToAction('idle', 0.2);
            setIdle(true)
        }
        ref.current.children[1].text = ref.current.position.x.toFixed(0) + ',' + ref.current.position.z.toFixed(0)

    }

    const fadeToAction = (name, duration) => {

        setPreAction(currentAction);
        setCurrentAction(actions[name]);

        const pa = preAction;
        const ca = currentAction;

        if (pa != null) {
            if (pa != ca) {
                console.log(name + speed);
                console.log("male", name, speed, duration);
                pa.fadeOut(duration);
                ca
                    .reset()
                    .setEffectiveTimeScale(1)
                    .setEffectiveWeight(1)
                    // .fadeIn(duration)
                    .play();
            }
        }
    }

    // 加标签
    // let pplDiv = document.createElement('div');
    // pplDiv.className = 'label';
    // pplDiv.id = 'ppl';
    // // pplDiv.style.marginLeft = '2em';
    // // pplDiv.appendChild( likeImg );
    //
    // let pplLabel = new CSS2DObject(pplDiv);
    // pplLabel.position.set(0, 250, 0);
    useEffect(() => {
        // actions['walk'].reset().fadeIn(0.5).play()
        // const actions ={}


        mobile()
        // console.log(male)
        // console.log(ref)
        // console.log(api)
        // actions['idle'].fadeOut(0.5);
        //
        // actions['walk2'].reset().fadeIn(0.5).play()

        // actions[names[1]].reset().fadeIn(0.5).play()
        // return () => actions[names[1]].fadeOut(0.5)
        // console.log(names)
    }, [])


    return (
        <>
            <group scale={0.01} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
                <group>
                    <primitive object={nodes.mixamorigHips} />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        geometry={nodes.casual_Male_G.geometry}
                        skeleton={nodes.casual_Male_G.skeleton}
                        material={nodes.casual_Male_G.material}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        {/*<primitive object={pplLabel}></primitive>*/}
                        <meshStandardMaterial
                            map={colorMap}
                            map-flipY={false}
                            skinning />
                    </skinnedMesh>

                </group>
                <Text rotation={props.fontRotation}
                    fontSize={45}
                    position={[0, 0, -220]}
                    color="#FF8230"
                    material-fog={false} letterSpacing={0}
                    outlineColor="white"
                    outlineWidth={5}>
                </Text>
            </group>

        </>
    );
}

export default Index;