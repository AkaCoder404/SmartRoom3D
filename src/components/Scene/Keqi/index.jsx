// React
import React, { useEffect, useState } from 'react';
import { Text, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import * as THREE from 'three';
// import axios from 'axios';
// import * as io from '../../../socket/socket.js';

// Custom Components

// Handle Client Stuff
// const client = io('http://tsinghua-future.tpddns.cn:8000');
// var data = { 'messages-raw': [], 'new-activity-on-fields': [], 'step': [], 'activity-update': [], 'clusters-update': [], 'objects-update': [], 'falls-detected': [] };
// var is_saving = false;

// client.on('connect', () => { console.log('connected'); });
// client.on('error', (error) => { console.log('error connecting', error)});
// client.on('connect_error', (error) => { console.log('error connecting: ', error.message); });
// client.on('messages-raw', function (data) {
//     // Print current time in YYYY-MM-DD HH:MM:SS format
//     // console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
//     // console.log(data);
// });

// client.on('new-activity-on-fields', function (activities) {
//     // console.log('new-activity-on-fields');
//     if (is_saving) {
//         var timestamp = new Date().getTime();
//         for (var i = 0; i < activities.length; i++) {
//             activities[i][0] = timestamp;
//             data['new-activity-on-fields'].push(activities[i]);
//         }
//         // for (activity in activities) {
//         //     activity[0] = timestamp;
//         //     data['new-activity-on-fields'].push(activity);
//         // }
//         // console.log(activities);
//     }
// });
// client.on('step', function (x, y) {
//     // console.log('step detected');
//     if (is_saving) {
//         var timestamp = new Date().getTime();
//         data['step'].push([timestamp, x, y]);
//         // txt = 'step detected on (' + String(x) + ', ' + String(y) + ')';
//         // txt += '\n';
//         // var csl = document.getElementById("csl");
//         // csl.value = csl.value + txt;
//     }
// });
// client.on('activity-update', function (activity) {
//     // console.log('activity-update');
//     if (is_saving) {
//         var timestamp = new Date().getTime();
//         data['activity-update'].push([timestamp, activity]);
//     }
// });
// client.on('clusters-update', function (clusters) {
//     // console.log('clusters-update');
//     if (is_saving) {
//         var timestamp = new Date().getTime();
//         data['clusters-update'].push([timestamp, clusters]);
//     }
// });
// // client.on('objects-update', function (objects) {
// //     console.log('objects-update');
// //     if (is_saving) {
// //         var timestamp = new Date().getTime();
// //         data['objects-update'].push([timestamp, objects]);
// //     }
// // });
// client.on('falls-detected', function (infos) {
//     // console.log('falls-detected');
//     if (is_saving) {
//         var timestamp = new Date().getTime();
//         data['falls-detected'].push([timestamp, infos]);
//     }
// });

function Index(props) {
    const { nodes, animations } = useGLTF('/models/keqi5.glb')
    // const {actions,ref,names} = useAnimations(animations)
    const { actions, ref } = useAnimations(animations)

    // const male = useRef(null)
    // const [mixer,setMixer] = useState(()=>new THREE.AnimationMixer(undefined));
    // const [actions,setActions] = useState(()=>{
    //     return {
    //         idle: mixer.clipAction(animations[0],nodes.idle),
    //         sit: mixer.clipAction(animations[1],nodes.idle),
    //         walk: mixer.clipAction(animations[2],nodes.idle),
    //         walk2: mixer.clipAction(animations[2],nodes.idle)

    //     }
    // })
    // console.log(actions)
    const [moveLeft, setMoveLeft] = useState(false)
    const [moveRight, setMoveRight] = useState(false)
    const [moveUp, setMoveUp] = useState(false)
    const [moveDown, setMoveDown] = useState(false)
    const [isIdling, setIdle] = useState(true)
    // eslint-disable-next-line
    const [isSitting, setSit] = useState(false)
    const [currentAction, setCurrentAction] = useState(undefined)
    const [preAction, setPreAction] = useState(undefined)
    // eslint-disable-next-line
    const [speed, setSpeed] = useState(0.03)

    // handle all frame actions 
    useFrame(() => {
        updateMobile(speed);
        // console.log(ref)
        // pplDiv.textContent = ref.current.position.x + ', ' + ref.current.position.z
    })

    // Person texture 
    const [colorMap, normalMap] = useTexture([
        '/models/_MainTex.jpg',
        '/models/_MainTex.jpg',
    ])

    // Control character movement
    // eslint-disable-next-line
    const mobile = () => {
        let onKeyDown = (event) => {
            // console.log(event.keyCode);
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
                case 76:    // l sit
                    setSit(true);
                    setIdle(false);
                    break;
                default:
                    break
            }
        }
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
                case 76:    // l
                    setSit(false)
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
    }

    // Update character position
    // eslint-disable-next-line
    const updatePosition = () => {
        // console.log("current position", ref.current.position, ref.current);

        // client.on('objects-update', function (objects) {
        //     // console.log('objects-update', objects);
        //     try {
        //         // console.log(ref.current.rotation)
        //         // 速率大于0.1时，切换为walk
        //         if (objects[0].mV > 0.1 && !isSitting) {
        //             setSit(false);
        //             setIdle(false)
        //             actions['idle'].stop()
        //             actions['walk'].play()
        //         }
        //         // 速率过小，很有可能是静电导致的，切换为idle
        //         else if (!isSitting) {
        //             actions['walk'].stop()
        //             actions['idle'].play()

        //             setSit(false);
        //             setIdle(true)
        //             ref.current.children[0].rotation.z = 0;
        //         }
        //         // eslint-disable-next-line
        //         if (!moveUp && !moveDown && !moveLeft && !moveRight && (!isIdling || !isSitting && isIdling)) {
        //             fadeToAction('idle', 0.2);
        //             setIdle(true)
        //         }
        //         // 当人物为sit时，忽略上述两种情况

        //         // 更新位置信息和方向（暂时是sit不更改这些信息）
        //         if (!isSitting) {
        //             // 手动对齐了一下，但是还不是很准，目前感觉是房间貌似并非一比一？（2022/7/20）
        //             ref.current.position.x = objects[0].x * 1 + 1;
        //             ref.current.position.z = -objects[0].y * 1 + 3.8;

        //             // 在raw数据基础上逆时针旋转90度
        //             ref.current.children[0].rotation.z = -THREE.MathUtils.degToRad(objects[0].aV) - Math.PI * 0.5;
        //         }
        //     } catch (err) {
        //         // 如果没有监听到objects-update信号（通常是地板上没有数据）时，传回的一般是undefined
        //         // 为了处理这种情况，我们让人物在无数据时也表现为idle
        //         // console.log("error: ", err);
        //         if (!isSitting) {
        //             fadeToAction('idle', 0.2)
        //             setIdle(true)
        //             ref.current.children[0].rotation.z = 0;
        //         }
        //     }
        //     ref.current.children[1].text = ref.current.position.x.toFixed(1) + ',' + ref.current.position.z.toFixed(1)
        //     // +'\n' + objects[0].mV.toFixed(1) +'km/h'

        //     // })
        // })
    }

    // eslint-disable-next-line
    // const sofaStatus = () => {
    //     setInterval(function () {
    //         // port：5007中 5008上 5009下
    //         axios.get("http://tsinghua-future.tpddns.cn/api:5007").then(resp => {
    //             console.log(resp);
    //             var isPressed = false;
    //             var strlist = resp.data.split("\n");

    //             for (var i = 0; i < 4; i++) {
    //                 var each_list = strlist[i].split(" ");
    //                 var press_data = parseInt(each_list[1].split(":")[1]);

    //                 // 当压力值小于4095时，判定为有人坐
    //                 if (press_data < 4095) {
    //                     isPressed = true;
    //                     console.log(strlist);
    //                 }

    //                 // 有人坐的话，切换sit动画，向前，打标记
    //                 if (isPressed) {
    //                     ref.current.rotation.y = 0;
    //                     actions['sit'].play();
    //                     setSit(true);
    //                 } else {
    //                     setSit(false);
    //                 }
    //                 // console.log(isPressed);
    //             }
    //         })
    //     }, 200);    // 1秒刷新5次数据
    // }

    const updateMobile = (speed) => {
        // console.log(moveUp, moveDown, moveLeft, moveRight);
        if (isSitting) {
            fadeToAction('sit', 0.2);
        }
        if (moveUp) {
            // w, up 
            fadeToAction('walk', 0.0); // lag in fade to fade to action 0.2
            ref.current.position.z -= speed;
            ref.current.children[0].rotation.z = Math.PI;
        }
        if (moveDown) {
            // s, down
            fadeToAction('walk', 0.0);
            ref.current.position.z += speed;
            ref.current.children[0].rotation.z = Math.PI * 2;
        }
        if (moveLeft) {
            // d, left
            fadeToAction('walk', 0.0);
            ref.current.position.x -= speed;
            ref.current.children[0].rotation.z = Math.PI * 0.5;
        }
        if (moveRight) {
            // a, right
            fadeToAction('walk', 0.0);
            ref.current.position.x += speed;
            ref.current.children[0].rotation.z = Math.PI * 1.5;
        }
        // set idle if not moving up down left right or sitting
        // eslint-disable-next-line
        if (!moveUp && !moveDown && !moveLeft && !moveRight && (!isIdling || !isSitting && isIdling)) {
            // console.log("stop");
            fadeToAction('idle', 0.2);
            setIdle(true); // TODO
        }
        ref.current.children[1].text = ref.current.position.x.toFixed(0) + ' , ' + ref.current.position.z.toFixed(0)
    }

    const fadeToAction = (name, duration) => { // change from one action to another
        setPreAction(currentAction);
        setCurrentAction(actions[name]);
        const pa = preAction;
        const ca = currentAction;
        if (pa !== undefined && pa != null) {
            if (pa !== ca) {
                console.log("keqi", name, speed, duration);
                // console.log(name + speed);
                pa.fadeOut(duration);
                ca
                    .reset()
                    .setEffectiveTimeScale(1)
                    .setEffectiveWeight(1)
                    .fadeIn(duration)
                    .play();
            }
        }
    }

    // 加标签
    // let pplDiv = document.createElement('div');
    // pplDiv.className = 'label';
    // pplDiv.id = 'ppl';
    // pplDiv.style.marginLeft = '2em';
    // pplDiv.appendChild( likeImg );
    // let pplLabel = new CSS2DObject(pplDiv);
    // pplLabel.position.set(0, 250, 0);

    useEffect(() => {
        // actions['walk'].reset().fadeIn(0.5).play(); // walking motion
        // const actions ={}
        // updatePosition();
        // sofaStatus();

        // console.log(male)
        // console.log(ref)
        // console.log(api)
        // actions['idle'].fadeOut(0.5);
        // actions['walk2'].reset().fadeIn(0.5).play();

        // actions[names[1]].reset().fadeIn(0.5).play()
        // return () => actions[names[1]].fadeOut(0.5)
        // console.log(names)

        mobile();
        updatePosition();
    }, [updatePosition])


    return (
        <>
            <group scale={1} rotation={[Math.PI / 2, 0, 0]} ref={ref}>
                <group
                // position={pPosition}
                >
                    <primitive object={nodes.mixamorigHips} />
                    {/* 人 */}
                    <skinnedMesh
                        onClick={(e) => console.log('我是人')}
                        castShadow
                        receiveShadow
                        geometry={nodes.Head.geometry}
                        skeleton={nodes.Head.skeleton}
                        // material={nodes.Head.material}
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
                {/* 人的位置标签 */}
                <Text rotation={props.fontRotation}
                    fontSize={32}
                    position={[0, 0, -2.2]}
                    color="#FF8230"
                    material-fog={false} letterSpacing={0}
                    outlineColor="white"
                    outlineWidth={5}
                    scale={0.01}
                >
                </Text>
            </group>

        </>
    );
}

export default Index;