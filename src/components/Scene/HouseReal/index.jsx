// 
import React, { useRef, Suspense, useEffect, useState } from "react";
import { EffectComposer, N8AO, /*SSAO*/ } from '@react-three/postprocessing'
import { useSpring, animated } from "react-spring";
import { Canvas, useLoader } from "@react-three/fiber";
import {
    useGLTF,
    // Stage,
    // Environment,
    // SpotLight,
    OrthographicCamera,
    // useFBX,
} from "@react-three/drei";
import { TextureLoader } from "three";


// Custom Components
import './index.css'
import Keqi from "../Keqi";
// import Male from "../Male";
// import People from "../People";
import { menu2state, ACState } from "../../../utils/globalState";
// import {Row, Col, Slider, InputNumber} from 'antd'


function HouseReal({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/house21.glb");
    const colorMap = useLoader(TextureLoader, '/texture/ground.jpg')

    let material4 = nodes.立方体_3.material
    material4.transparent = true
    material4.depthWrite = false
    material4.opacity = 0.25
    let material1 = nodes.立方体_3_1.material
    material1.transparent = true
    material1.depthWrite = false
    material1.opacity = 0.01
    let material2 = nodes.窗户.material
    material2.transparent = true
    material2.depthWrite = false
    material2.opacity = 0.5
    let material3 = materials.材质
    material3.map = colorMap


    // 负责空调的开关UI
    // const setLivingroomAcOnOFF = ACState((state) => state.setLivingroomAcOnOFF);
    const setBedroomAcOnOFF = ACState((state) => state.setBedroomAcOnOFF);
    // const setDiningroomAcOnOFF = ACState((state) => state.setDiningroomAcOnOFF);
    // const livingroomAcOnOff = ACState((state) => state.livingroomAcOnOFF);
    const bedroomAcOnOff = ACState((state) => state.bedroomAcOnOFF);
    // const diningroomAcOnOff = ACState((state) => state.diningroomAcOnOFF);
    // const [dotColor, setDotColor] = useState(0xFF0000); // Default color is red
    const onHandleBedroomACClick = () => {
        console.log('卧室空调', !bedroomAcOnOff);
        if (bedroomAcOnOff === false) {
            // setDotColor(0x00FF00);
            setBedroomAcOnOFF(true);
            return;
        }
        else {
            // setDotColor(0xFF0000);
            setBedroomAcOnOFF(false);
        }
    }

    const [dotColor2, setDotColor2] = useState(0xFF0000); // Default color is red
    const onHandleLivingroomACClick = () => {
        console.log('客厅空调')
        if (dotColor2 === 0xFF0000) {
            setDotColor2(0x00FF00);
            return;
        }
        else { setDotColor2(0xFF0000); }
    }

    const [dotColor3, setDotColor3] = useState(0xFF0000); // Default color is red
    const onHandleDiningRoomACClick = () => {
        console.log('餐厅空调')
        if (dotColor3 === 0xFF0000) {
            setDotColor3(0x00FF00);
            return;
        }
        else { setDotColor3(0xFF0000); }
    }

    // 控制电视
    const targetRef = useRef();
    const [tvOnOff, setTvOnOff] = useState(false);
    const onHandleTVClick = () => {
        console.log('电视');
        setTvOnOff(!tvOnOff);
    }

    // 控制洗衣机
    const [washingMachineDotColor, setWashingMachineDotColor] = useState(0xFF0000); // Default color is red
    const onHandleWashingMachineClick = () => {
        console.log('洗衣机');
        if (washingMachineDotColor === 0xFF0000) {
            setWashingMachineDotColor(0xFFFF00);
            return
        }
        else { setWashingMachineDotColor(0xFF0000); }
    }

    return (
        <group ref={group} {...props} dispose={null} style={{}}>
            <group
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            >
                <group position={[-179.66, 405.68, -272.85]}>
                    {/* <mesh*/}
                    {/*    castShadow*/}
                    {/*    receiveShadow*/}
                    {/*    geometry={nodes.厨房挂橱_2_2.geometry}*/}
                    {/*    material={materials.Oct漫射1_3}*/}
                    {/*    position={[-1.81, -5.85, 22.58]}*/}
                    {/*    rotation={[Math.PI, 0, -Math.PI / 2]}*/}
                    {/*    scale={0.1}*/}
                    {/*/>*/}
                    {/*<mesh*/}
                    {/*    castShadow*/}
                    {/*    receiveShadow*/}
                    {/*    geometry={nodes.立方体_1.geometry}*/}
                    {/*    material={materials.Oct漫射1_4}*/}
                    {/*/> */}
                </group>
                <group
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                >
                    <mesh
                        // onClick={(e) => console.log('客厅门')}
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_100.geometry}
                        material={materials.门}
                    />
                    <mesh
                        onClick={(e) => console.log('客厅墙')}
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_101.geometry}
                        material={materials.客厅墙}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_90.geometry}
                        material={materials.Oct漫射1_5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_94.geometry}
                        material={materials.客厅墙}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_95.geometry}
                        material={materials.客厅墙}
                    />
                </group>
                <group position={[-236.35, -94.98, -45.35]}>
                    <mesh
                        onClick={(e) => console.log('木床1')}
                        castShadow
                        receiveShadow
                        geometry={nodes.床1.geometry}
                        material={materials.木质}
                        position={[-310.3, 546.13, 45.35]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.1}
                    />
                    <mesh
                        onClick={(e) => console.log('木床2')}
                        castShadow
                        receiveShadow
                        geometry={nodes.床2.geometry}
                        material={materials.木质}
                        position={[-310.3, 546.13, 45.35]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.1}
                    />
                    <mesh
                        onClick={(e) => console.log('床单2')}
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_1_2.geometry}
                        material={materials.chuangdan_0}
                        position={[-104.86, -226.66, -8.31]}
                    />
                    <mesh
                        onClick={(e) => console.log('枕头1')}
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_2_2.geometry}
                        material={materials.枕头}
                        position={[125.05, -349.14, -28.74]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_2_3.geometry}
                        material={materials.chuangdan_0}
                        position={[125.05, -226.66, -8.31]}
                    />
                    <mesh
                        onClick={(e) => console.log('枕头2')}
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_4.geometry}
                        material={materials.枕头}
                        position={[-107.99, -349.14, -28.74]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_4.geometry}
                        material={materials.Oct漫射1_3}
                        position={[583.34, 59.35, -16.6]}
                    />
                </group>
                <group
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_5.geometry}
                        material={materials.地板_0}
                        position={[965.22, 616.95, -242.89]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={10}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.鞋橱.geometry}
                        material={materials.木质}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.餐厅橱子.geometry}
                        material={materials.木质}
                    />
                </group>
                <group
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_369.geometry}
                        material={materials.地板_0}
                    />
                </group>
                <group
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_102.geometry}
                        material={materials.Oct漫射1_6}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_103.geometry}
                        material={materials.Oct漫射1_6}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_103_1.geometry}
                        material={materials.客厅墙}
                        position={[9517.98, 1519.99, -4437.48]}
                        rotation={[0, 0.01, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_99.geometry}
                        material={materials.Oct漫射1_6}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_99_1.geometry}
                        material={materials.Oct漫射1_5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.物件_99_2.geometry}
                        material={materials.Oct漫射1_5}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.卫生间地砖.geometry}
                    material={materials.门}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房台面.geometry}
                    material={materials.Oct漫射1_3}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房台面_1.geometry}
                    material={materials.光泽度1_1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.冰箱.geometry}
                    material={materials.Oct漫射1}
                    position={[74.03, 256.35, -117.69]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅窗户.geometry}
                    material={material2}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅跑步机_1.geometry}
                    material={materials.光泽度1}
                    position={[-453.95, 135.08, -70.71]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房地板.geometry}
                    material={materials.材质}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.椅子2.geometry}
                    material={materials.光泽度1_2}
                    position={[-624.22, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房挂橱.geometry}
                    material={materials.Oct漫射1_3}
                    position={[387.83, -161.2, -250.27]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房挂橱_1.geometry}
                    material={materials.Oct漫射1_5}
                    position={[387.83, -161.2, -250.27]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅跑步机_2.geometry}
                    material={materials.光泽度1}
                    position={[-453.95, 135.08, -70.71]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.床头柜.geometry}
                    material={materials.Oct漫射1_4}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厨房挂橱_2.geometry}
                    material={materials.Oct漫射1_5}
                    position={[387.83, -161.2, -250.27]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    ref={targetRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.沙发.geometry}
                    material={materials.Oct漫射1_1}
                    position={[324.72, 78.04, -44.44]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗衣机_1.geometry}
                    material={materials.Oct透明1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.厕所玻璃ok.geometry}
                    material={materials["Material.001"]}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.地毯.geometry}
                    material={materials.地板_0}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.煤气灶.geometry}
                    material={materials.Oct漫射1_2}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.地毯_1.geometry}
                    material={materials.地板_0}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.地毯_2.geometry}
                    material={materials.地板_0}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.排风扇.geometry}
                    material={materials.Oct漫射1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅柜子.geometry}
                    material={materials.Oct漫射1_4}
                    position={[589.44, 8.33, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.椅子1.geometry}
                    material={materials.光泽度1_2}
                    position={[-624.22, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 客厅空调 */}
                <mesh
                    // onClick={(e) => onHandleDotClick()}
                    castShadow
                    receiveShadow
                    position={[600, 88, -251]}
                    scale={0.1}
                >
                    <sphereGeometry args={[100, 15, 15]} />
                    <meshBasicMaterial color={dotColor2} />
                </mesh>
                <mesh
                    onClick={(e) => onHandleLivingroomACClick()}
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅空调.geometry}
                    material={materials.冰箱}
                    position={[-546.65, 451.15, -22.85]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    onClick={(e) => console.log('客厅窗户')}
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅窗户_1.geometry}
                    material={material2}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗手台_厕所_ok.geometry}
                    material={materials.光泽度1_1}
                    position={[-571.61, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗手盆_厨房_ok.geometry}
                    material={materials.光泽度1_0}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗衣机_2.geometry}
                    material={materials.Oct漫射1_2}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 电视 */}
                {tvOnOff === true ?
                    <group >
                        <mesh
                            onClick={(e) => onHandleTVClick()}
                            castShadow
                            receiveShadow
                            geometry={nodes.电视_ok_1.geometry}
                            material={materials.Oct漫射1_2}
                            position={[-546.65, 451.15, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.1}
                        >
                            {/* <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} /> */}
                        </mesh>
                        <spotLight
                            color="yellow"
                            intensity={1.5}
                            angle={0.6}
                            distance={1.5}
                            position={[325, 300, -75]}
                            target={targetRef.current}
                            castShadow />
                    </group> :
                    <mesh
                        onClick={(e) => onHandleTVClick()}
                        castShadow
                        receiveShadow
                        geometry={nodes.电视_ok_1.geometry}
                        material={materials.Oct漫射1_2}
                        position={[-546.65, 451.15, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.1}
                    />
                }

                {/*  */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.画2.geometry}
                    material={materials.Oct漫射1_1}
                    position={[621.96, 187.54, -177.31]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.椅子4.geometry}
                    material={materials.光泽度1_2}
                    position={[-624.22, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 卧室空调 */}
                <mesh
                    castShadow
                    receiveShadow
                    position={[-360, -451.15, -250]}
                    scale={0.1}
                >
                    <sphereGeometry args={[100, 15, 15]} />
                    <meshBasicMaterial color={bedroomAcOnOff === true ? 0x00FF00 : 0xFF0000} />
                </mesh>
                <mesh
                    onClick={(e) => onHandleBedroomACClick()}
                    castShadow
                    receiveShadow
                    geometry={nodes.空调_ok.geometry}
                    material={materials.冰箱}
                    position={[-546.65, 451.15, -25.25]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                >
                    {/* <meshBasicMaterial color={ bedroomAc ? 0xFFEE03 : 0xFFFFFF }/> */}
                    {/* <meshStandardMaterial color={0xFFFFFF} emmisive={0xffee03}/>  */}
                </mesh>
                {/*  */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.立方体.geometry}
                    material={materials.木质}
                    position={[-176.83, 408.01, -52.55]}
                />
                {/*  */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.立方体_3_2.geometry}
                    material={materials.Oct漫射1_3}
                    position={[391.45, -161.51, -273.68]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.立方体_3_3.geometry}
                    material={materials.Oct漫射1_3}
                    position={[379.79, -32.79, -56.87]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗手液_ok.geometry}
                    material={materials.chuangdan}
                    position={[-571.61, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.茶几.geometry}
                    material={materials.Oct漫射1_4}
                    position={[329.5, 216.49, -34]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.客厅跑步机.geometry}
                    material={materials.门}
                    position={[-453.95, 135.08, -70.71]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.衣架.geometry}
                    material={materials.光泽度1_1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.衣柜.geometry}
                    material={materials.冰箱}
                    position={[50.83, 366.29, -101.48]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.衣柜框.geometry}
                    material={materials.架子}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 餐厅空调 */}
                <mesh
                    castShadow
                    receiveShadow
                    position={[-310, 58, -232]}
                    scale={0.1}
                >
                    <sphereGeometry args={[100, 15, 15]} />
                    <meshBasicMaterial color={dotColor3} />
                </mesh>
                <mesh
                    onClick={(e) => onHandleDiningRoomACClick()}
                    castShadow
                    receiveShadow
                    geometry={nodes.餐厅空调.geometry}
                    material={materials.冰箱}
                    position={[-583.52, 454.46, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.椅子3.geometry}
                    material={materials.光泽度1_2}
                    position={[-624.22, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗手台_厕所_ok_1.geometry}
                    material={materials.Oct漫射1_0}
                    position={[-574.64, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/*/> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.洗手台_厕所_ok_2.geometry}
                    material={nodes.洗手台_厕所_ok_2.material}
                    position={[-571.61, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 电视架 */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.电视_ok.geometry}
                    material={materials.Oct漫射1_0}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.画3.geometry}
                    material={materials.chuangdan_0}
                    position={[621.97, 239.94, -139.11]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.窗户.geometry}
                    material={material2}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.花洒_ok.geometry}
                    material={materials.Oct漫射1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.门.geometry}
                    material={materials.门}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.餐厅橱.geometry}
                    material={materials.Oct漫射1_4}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.餐桌.geometry}
                    material={materials.光泽度1_1}
                    position={[-624.22, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                {/* 洗衣机 */}
                <mesh
                    castShadow
                    receiveShadow
                    position={[345, -250, -50]}
                    scale={1}
                >
                    <sphereGeometry args={[10, 15, 15]} />
                    {/* <meshBasicMaterial color={washingMachineDotColor} /> */}
                    <meshStandardMaterial color={washingMachineDotColor} emissive={washingMachineDotColor} />
                </mesh>
                <mesh
                    onClick={(e) => onHandleWashingMachineClick()}
                    castShadow
                    receiveShadow
                    geometry={nodes.洗衣机.geometry}
                    material={materials.Oct漫射1}
                    position={[-546.65, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.马桶_ok.geometry}
                    material={materials.光泽度1_1}
                    position={[-571.61, 451.15, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.1}
                />
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.立方体_2.geometry}
                        material={materials.Oct漫射1_6}
                        position={[382.93, -343.53, -155.27]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_1.geometry}
                        material={material1}
                        position={[-14.56, -258.51, -137.15]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_2_2.geometry}
                        material={material1}
                        position={[-145.58, 18.75, -137.15]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_3_2.geometry}
                        material={material1}
                        position={[326.65, 16.76, -137.15]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_5.geometry}
                        material={material1}
                        position={[-354.88, 303.72, -137.15]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_4_2.geometry}
                        material={material1}
                        position={[-5.36, 303.72, -137.15]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3_6.geometry}
                        material={material1}
                        position={[-354.88, 108.01, -137.15]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        // castShadow
                        receiveShadow
                        geometry={nodes.立方体_3.geometry}
                        material={material4}
                        position={[96.55, -356.25, -174.69]}
                    />
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.平面.geometry}
                material={materials.地板_0}
                position={[0, -0.01, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.0101}
            />
        </group >
    );
}

useGLTF.preload("/models/house21.glb");

export default function App(props) {
    const canvas = useRef()
    const camera = useRef()
    // const stage = useRef()

    const menu2key = menu2state((state) => state.menu2)
    const menu3 = menu2state((state) => state.menu3)

    const [left, setLeft] = useState("11%")
    const [width, setWidth] = useState("89vw")
    const [height, setHeight] = useState("90.5vh") // used to be 83.5
    const [top, setTop] = useState("9.5%")
    const [rotationX, setRotationX] = useState(0)
    const [rotationY, setRotationY] = useState(0)
    const [rotationZ, setRotationZ] = useState(0)
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    const [positionZ, setPositionZ] = useState(0)
    const [zoom, setZoom] = useState(180)
    const [fontRotaiton, setFontRotation] = useState([-Math.PI / 2, -Math.PI * 1 / 2.9, 0])
    const [zIndex, setZIndex] = useState(0)
    const [boxShadow, setBoxShadow] = useState(null)
    const [lastMenu3, setLastMenu3] = useState(0)
    const [display, setDisplay] = useState(1)

    const changeMenu = (key) => {
        if (key !== 2) {
            if (key === 0) {
                // console.log("Standard View");
                setLeft("11%")
                setWidth("89vw")
                setHeight("90.5vh")
                setTop("9.5%")
                setPositionX(-4.02)
                setPositionY(3.73)
                setPositionZ(1.95)
                setRotationX(-0.33 * Math.PI)
                setRotationY(-0.26 * Math.PI)
                setRotationZ(-0.28 * Math.PI)
                if (lastMenu3 === 1) {
                    setZoom(80)
                    setDisplay(0)

                    setTimeout(
                        () => {
                            setZoom(190)
                            setDisplay(1)
                            setLastMenu3(0)
                        }, 200
                    )
                } else {
                    setZoom(190)
                }
                setFontRotation([-Math.PI / 2, -Math.PI * 1 / 2.9, 0])
                setZIndex(0)
                setBoxShadow(null)
            }
            else {
                setLeft("11%")
                setWidth("89vw")
                setHeight("90.5vh")
                setTop("9.5%")
                setRotationX(-0.33 * Math.PI)
                setRotationY(-0.26 * Math.PI)
                setRotationZ(-0.28 * Math.PI)
                setFontRotation([Math.PI, 0, 0])
                setZIndex(0)
                setBoxShadow(null)

                if (key === 3) {
                    setPositionX(-3.47)
                    setPositionY(4.54)
                    setPositionZ(2.81)
                    if (lastMenu3 === 1) {
                        setZoom(80)
                        setDisplay(0)

                        setTimeout(
                            () => {
                                setZoom(394.18)
                                setDisplay(1)
                                setLastMenu3(0)
                            }, 200
                        )
                    }
                    else {
                        setZoom(394.18)
                    }
                }
                else if (key === 4) {
                    setPositionX(-6.30)
                    setPositionY(4.64)
                    setPositionZ(3.05)
                    if (lastMenu3 === 1) {
                        setZoom(80)
                        setDisplay(0)

                        setTimeout(
                            () => {
                                setZoom(415.52)
                                setDisplay(1)
                                setLastMenu3(0)

                            }, 200
                        )
                    }
                    else {
                        setZoom(415.52)
                    }
                }
                else if (key === 5) {
                    setPositionX(-6.7)
                    setPositionY(5.02)
                    setPositionZ(1.18)
                    if (lastMenu3 === 1) {
                        setZoom(80)
                        setDisplay(0)

                        setTimeout(
                            () => {
                                setZoom(372.7)
                                setDisplay(1)
                                setLastMenu3(0)

                            }, 200
                        )
                    }
                    else {
                        setZoom(372.7)
                    }
                }
                else if (key === 6) {
                    setPositionX(-5.65)
                    setPositionY(5.58)
                    setPositionZ(1.08)
                    if (lastMenu3 === 1) {
                        setZoom(80)
                        setDisplay(0)

                        setTimeout(
                            () => {
                                setZoom(426.3)
                                setDisplay(1)
                                setLastMenu3(0)

                            }, 200
                        )
                    }
                    else {
                        setZoom(426.3)
                    }
                }
                else if (key === 7) {
                    setPositionX(-5.68)
                    setPositionY(6.19)
                    setPositionZ(2.18)
                    if (lastMenu3 === 1) {
                        setZoom(80)
                        setDisplay(0)

                        setTimeout(
                            () => {
                                setZoom(393.6)
                                setDisplay(1)
                                setLastMenu3(0)

                            }, 200
                        )
                    }
                    else {
                        setZoom(393.6)
                    }
                }
            }
        }
        else if (key === 2) {
            console.log("Birds Eye View")
            if (menu3 === 0) {
                console.log("Birds Eye View", "opening menu2")
                setLeft("11%")
                setWidth("89vw")
                // setHeight("95.0vh")
                setHeight("90.5vh")
                setTop("9.5%")
                setPositionX(-0.72)
                setPositionY(2)
                setPositionZ(-0.2)
                setRotationX(-0.5 * Math.PI)
                setRotationY(0)
                setRotationZ(0)
                setZoom(160)
                setFontRotation([Math.PI, 0, 0])
                setZIndex(0)
                setBoxShadow(null)
                setLastMenu3(0)
            }
            else {
                console.log("Birds Eye View", "opening menu3")
                setTimeout(() => {
                    setLeft("16%")
                    setWidth("43vw")
                    setHeight("45.5vh")
                    // setTop("30.5%")
                    setTop("23.5%") // menu3 canvas loc
                    setFontRotation([Math.PI, 0, 0])
                    setZIndex(20)
                    setRotationX(-0.5 * Math.PI)
                    setRotationY(0)
                    setRotationZ(0)
                    setPositionY(10)
                    setBoxShadow("0px 4px 32px rgba(0,20,0,0.2)")

                    if (menu3 === 1) { // menu3 客厅
                        setPositionX(1.30)
                        setPositionZ(0.87)
                        setZoom(232.4)
                    }
                    else if (menu3 === 2) { // menu3 书箱
                        setPositionX(-0.84)
                        setPositionZ(0.98)
                        setZoom(236.11)
                    }
                    else if (menu3 === 3) { // menu3 厨房
                        setPositionX(1.18)
                        setPositionZ(-0.67)
                        setZoom(291.37)
                    }
                    else if (menu3 === 4) { // menu3 厕所
                        setPositionX(0.32)
                        setPositionZ(-1.25)
                        setZoom(297.8)
                    }
                    else if (menu3 === 5) { // menu3 卧室
                        setPositionX(-0.62)
                        setPositionZ(-1)
                        setZoom(248.76)
                    }
                }, 200)
                setLastMenu3(1)
            }
        }
    }


    // eslint-disable-next-line
    const onChange = (value, type) => {
        if (isNaN(value)) {
            return;
        }
        switch (type) {
            case 1:
                setRotationX(value * Math.PI);
                break;
            case 2:
                setRotationY(value * Math.PI);
                break;
            case 3:
                setRotationZ(value * Math.PI);
                break;
            case 4:
                setPositionX(value);
                break;
            case 5:
                setPositionY(value);
                break;
            case 6:
                setPositionZ(value);
                break;
            case 7:
                setZoom(value);
                break;
            default:
                break;
        }
    };

    // eslint-disable-next-line
    useEffect(() => {
        changeMenu(menu2key)
        // eslint-disable-next-line
    }, [menu2key])
    useEffect(() => {
        changeMenu(menu2key)
        // eslint-disable-next-line
    }, [menu3])

    const styles1 = useSpring({
        left: left,
        height: height,
        width: width,
        position: [positionX, positionY, positionZ],
        rotation: [rotationX, rotationY, rotationZ],
        zoom: zoom
    })

    const AnimOrthographicCamera = animated(OrthographicCamera)
    return (
        <animated.div className="App" style={{
            position: "absolute",
            top: top,
            left: lastMenu3 === 0 ? styles1.left : left,
            height: height,
            zIndex: zIndex,
            width: lastMenu3 === 0 ?
                styles1.width : width, boxShadow: boxShadow, opacity: display,
            // Keep the canvas within the size of the parent and fill parent
            // overflow: 'hidden',
        }}>
            <Canvas ref={canvas} shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
                <color attach="background" args={['#fffefc']} />
                <Suspense fallback={null}>
                    <EffectComposer multisampling={8}>
                        <N8AO intensity={5} radius={0.1} luminanceInfluence={1.1} bias={0.005} />
                    </EffectComposer>

                    {/* lighting */}
                    <directionalLight intensity={0.5} position={[2, 2, 0]} color="white" distance={5} />
                    <spotLight intensity={0.2} position={[0, 8, 2]} angle={0.2} penumbra={1} castShadow shadow-mapSize={[2048, 2048]} />
                    <hemisphereLight intensity={1.2} color="#e8d2b5" groundColor="#e8d2b5" />
                    <directionalLight castShadow intensity={1.5} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[1, 1, -1]} />

                    <AnimOrthographicCamera makeDefault zoom={
                        styles1.zoom} position={styles1.position}
                        rotation=
                        {styles1.rotation} ref={camera} />

                    <group>
                        <group scale={0.4}>
                            <HouseReal />
                            {/* position of housereal */}
                            <group position={[0, 0, 0]}>
                                <Suspense fallback={null}>
                                    {/* <People /> */}
                                    {/* <Male></Male> */}
                                    <Keqi fontRotation={fontRotaiton} />
                                </Suspense>
                            </group>
                        </group>
                    </group>

                    {/* </Stage> */}
                    {/* </Environment> */}
                </Suspense>
                {/*<OrbitControls/>*/}
            </Canvas>
        </animated.div>
    );
}
