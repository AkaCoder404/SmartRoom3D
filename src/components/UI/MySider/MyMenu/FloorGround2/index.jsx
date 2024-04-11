// 
import React, { useEffect, useState } from 'react';
// import QueueAnim from "rc-queue-anim";
import { Col, Row } from "antd";
import axios from 'axios';

// Custom Components
import Menu2Card from "../Menu2Card";
import './index.css'
// import FloorGround3 from "./FloorGround3";
import { menu2state, ACState } from "../../../../../utils/globalState";
// import MyMenu3 from "../MyMenu2/MyMenu3";
import { BedRoomSvg, CookSvg, SofaSvg, StudySvg3, ToiletSvg, TelevisionSvg } from "../../../../../assets/images/icons";


// language
import { useTranslation } from "react-i18next";


function Index(props) {
    const setMenu3Global = menu2state((state) => state.setMenu3)
    const menu3 = menu2state((state) => state.menu3)
    const menu2 = menu2state((state) => state.menu2)
    // const [display2,setDisplay2] = useState(true)
    const [title1, setTitle1] = useState("")

    // const [title] = useState("title");
    const { t } = useTranslation(); // language
    const title = () => {
        switch (menu2) {
            case 0:
                return title1;
            case 2:
                return t("floor");
            case 3:
                return t("livingroom");
            case 4:
                return t("bookroom");
            case 5:
                return t("bedroom");
            case 6:
                return t("bathroom");
            case 7:
                return t("kitchen");
            default:
                return t("floor");
        }
    }

    // 获取空调信息
    const setLivingroomAc = ACState((state) => state.setLivingroom);
    const setBedroomAc = ACState((state) => state.setBedroom);
    const setDiningroomAc = ACState((state) => state.setDiningroom);
    const livingroomAcTemp = ACState((state) => state.livingroom);
    const bedroomAcTemp = ACState((state) => state.bedroom);
    const diningroomAcTemp = ACState((state) => state.diningroom);
    const setLivingroomAcOnOFF = ACState((state) => state.setLivingroomAcOnOFF);
    const setBedroomAcOnOFF = ACState((state) => state.setBedroomAcOnOFF);
    const setDiningroomAcOnOFF = ACState((state) => state.setDiningroomAcOnOFF);
    const setLivingroomTargetTemp = ACState((state) => state.setLivingroomTargetTemp);
    const livingroomTargetTemp = ACState((state) => state.livingroomTargetTemp);
    const setBedroomTargetTemp = ACState((state) => state.setBedroomTargetTemp);
    const bedroomTargetTemp = ACState((state) => state.bedroomTargetTemp);
    const setDiningroomTargetTemp = ACState((state) => state.setDiningroomTargetTemp);
    const diningroomTargetTemp = ACState((state) => state.diningroomTargetTemp);
    const airconditonerData = async () => {
        // const url = "";
        // const data = {};
        // try {
        //     const response = await axios.post(url, data).then((res) => {
        //         // console.log("POST request successful:", res);
        //         var res_data = res.data;
        //         console.log(res_data);
        //         setLivingroomAc(res_data.living_room_temperature);
        //         setBedroomAc(res_data.bedroom_temperature);
        //         setDiningroomAc(res_data.study_room_temperature);
        //         setLivingroomAcOnOFF(res_data.living_room_airconditioner_power);
        //         setBedroomAcOnOFF(res_data.bedroom_airconditioner_power);
        //         setDiningroomAcOnOFF(res_data.study_room_airconditioner_power);
        //         setLivingroomTargetTemp(res_data.living_room_target_temperature);
        //         setBedroomTargetTemp(res_data.bedroom_target_temperature);
        //         setDiningroomTargetTemp(res_data.study_room_target_temperature);
        //     })
        //     console.log("airconditioner data response:", response);
        // }
        // catch (error) {
        //     console.error("Error making POST request:", error);
        // }
    }

    // 
    useEffect(() => {
        setTitle1(title());
        const intervalId = setInterval(airconditonerData, 5000); // 5000 milliseconds = 5 seconds
        return () => { clearInterval(intervalId); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu2])

    // Layer 2 Cards: Menu3
    const select = (key) => {
        // console.log(key, menu2, menu3);
        if (menu2 !== 0) {
            // Layer 2 for Birds Eye View
            if (menu2 === 2) {
                setMenu3Global(key)
                // setDisplay2(false)
            }
            else {
                // setDisplay2(true)
            }
        }

        // if(menu2!==0){
        //     if(key===menu3) {
        //         setMenu3Global(0)
        //         setDisplay2(true)
        //         console.log("setdisplay2", display2);
        //     }
        //     else {
        //         setMenu3Global(key)
        //         console.log("key1,"+key)
        //         console.log("key2,"+menu2)
        //         console.log("key3,"+menu3)
        //         if(menu2===2){
        //             setDisplay2(false)
        //         }
        //         else{
        //             setDisplay2(true)
        //         }
        //     }
        // }
    }

    return (
        <div style={{
            width: "23vw",
            // height: "83.5vh",
            height: "95vh",
            position: 'fixed',
            // top: "16.5%",
            top: "9.5%",
            bottom: 0,
            borderTopRightRadius: 0,
            backdropFilter: "blur(1px)",
            backgroundImage: "linear-gradient(to left,rgba(253,251,249,0),#FDFBF9)",
            // backgroundColor: "green",
            left: props.left,
            opacity: props.opacity,
            display: props.display
        }}>
            <Row gutter={16}>
                <Col span={10}>
                    <div style={{
                        fontSize: "2.7em",
                        lineHeight: "100%",
                        textAlign: "left",
                        marginTop: "0.9em",
                        marginLeft: "0.6em",
                        fontWeight: "bold",
                        marginBottom: 17,
                        color: "rgba(16,16,16,0.5)",
                    }} key={props.selected}>{title1}
                    </div>
                </Col>
            </Row>


            <div style={{ overflow: "auto", height: "76.5vh" }}>
                {/* 不同页面不同Menu2Card */}
                {/* 地板 */}
                {menu2 === 2 ? <>
                    <Menu2Card key1={1} select={select} key="menu22-demo2" menu3={menu3} title={t("livingroom")}
                        cardItems={[
                            { "key": "1", "name": t("temperature"), "value": "30", "units": t("celcius"), },
                            { "key": "2", "name": t("humidity"), "value": "49", "units": "%" }
                        ]}
                        icon={<SofaSvg />} />
                    <Menu2Card key1={2} select={select} key="menu22-demo3" menu3={menu3} title={t("bookroom")}
                        cardItems={[
                            { "key": "1", "name": t("temperature"), "value": "29", "units": t("celcius"), },
                            { "key": "2", "name": t("humidity"), "value": "47", "units": "%" }]}
                        icon={<StudySvg3 />} />
                    <Menu2Card key1={3} select={select} key="menu22-demo4" menu3={menu3} title={t("kitchen")}
                        cardItems={[
                            { "key": "1", "name": t("temperature"), "value": "28", "units": t("celcius"), },
                            { "key": "2", "name": t("humidity"), "value": "49", "units": "%" }]}
                        icon={<CookSvg />} />
                    <Menu2Card key1={4} select={select} key="menu22-demo5" menu3={menu3} title={t("bathroom")}
                        cardItems={[
                            { "key": "1", "name": t("temperature"), "value": "27", "units": t("celcius"), },
                            { "key": "2", "name": t("humidity"), "value": "49", "units": "%" }]}
                        icon={<ToiletSvg />} />
                    <Menu2Card key1={5} select={select} key="menu22-demo6" menu3={menu3} title={t("bedroom")}
                        cardItems={[
                            { "key": "1", "name": t("temperature"), "value": "26", "units": t("celcius"), },
                            { "key": "2", "name": t("humidity"), "value": "49", "units": "%" }]}
                        icon={<BedRoomSvg />} />
                </>
                    : null}
                {/* 客厅 */}
                {menu2 === 3 ?
                    <>
                        <Menu2Card key1={1} select={select} key="menu23-demo2" menu3={menu3} title={t("airconditioner")}
                            cardItems={[
                                { "name": t("room_temperature"), "value": livingroomAcTemp, "units": t("celcius") },
                                { "name": t("state"), "value": t("state_on") },
                                { "name": t("target_temperature"), "value": livingroomTargetTemp, "units": t("celcius") }]}
                            icon={<StudySvg3 />} />
                        <Menu2Card key1={2} select={select} key="menu23-demo3" menu3={menu3} title={t("sofa")}
                            cardItems={[
                                { "name": t("seat") + "1", "value": "0", "units": t("kilograms") },
                                { "name": t("seat") + "2", "value": "57", "units": t("kilograms") },
                                { "name": t("seat") + "3", "value": "0", "units": t("kilograms") },]}
                            icon={<SofaSvg />} />
                        <Menu2Card key1={3} select={select} key="menu23-demo4" menu3={menu3} title={t("television")}
                            cardItems={[{ "name": t("open_time"), "value": "34", "units": t("minutes") }]}
                            icon={<TelevisionSvg />} />
                    </>
                    : null}
                {/* 书房 */}
                {menu2 === 4 ?
                    <>
                        <Menu2Card key1={1} select={select} key="menu24-demo1" menu3={menu3} title={t("airconditioner")}
                            cardItems={[
                                { "name": t("room_temperature"), "value": diningroomAcTemp, "units": t("celcius") },
                                { "name": t("state"), "value": t("state_on") },
                                { "name": t("target_temperature"), "value": diningroomTargetTemp, "units": t("celcius") }]}
                            icon={<StudySvg3 />} />
                        <Menu2Card key1={2} select={select} key="menu24-demo2" menu3={menu3} title={t("chair")}
                            cardItems={[
                                { "name": t("people_count"), "value": "1", "units": "人" },
                            ]}
                            icon={<SofaSvg />} />
                    </>
                    : null}
                {/* 卧室 */}
                {menu2 === 5 ?
                    <>
                        <Menu2Card key1={1} select={select} key="menu25-demo2" menu3={menu3} title={t("bed")}
                            cardItems={[
                                { "name": t("people_count"), "value": "2", "units": "人" },
                                { "name": t("sleep_time"), "value": "10", "units": t("hours") }]}
                            icon={<StudySvg3 />} />
                        <Menu2Card key1={2} select={select} key="menu25-demo3" menu3={menu3} title={t("airconditioner")}
                            cardItems={[
                                { "name": t("room_temperature"), "value": bedroomAcTemp, "units": t("celcius") },
                                { "name": t("state"), "value": t("state_on") },
                                { "name": t("target_temperature"), "value": bedroomTargetTemp, "units": t("celcius") }]}
                            icon={<StudySvg3 />} />
                    </>
                    : null}
                {/* 厕所 */}
                {menu2 === 6 ?
                    <>
                        {/* <Menu2Card key1={1} select={select} key="menu26-demo2" menu3={menu3} title={t("chair")}
                            cardItems={[]}
                            icon={<SofaSvg />} /> */}
                        <Menu2Card key1={2} select={select} key="menu26-demo3" menu3={menu3} title={t("closestool")}
                            cardItems={[
                                { "name": t("bathroom_time"), "value": "0", "units": t("minutes") },
                            ]}
                            icon={<SofaSvg />} />
                    </>
                    : null}
                {/* 厨房 */}
                {menu2 === 7 ?
                    <>
                        <Menu2Card key1={1} select={select} key="menu27-demo2" menu3={menu3} title={t("washingmachine")}
                            cardItems={[{ "name": t("state"), "value": t("state_on") },]}
                            icon={<StudySvg3 />} />
                        {/* <Menu2Card key1={2} select={select} key="menu27-demo3" menu3={menu3} title={t("chair")}
                            cardItems={[]}
                            icon={<StudySvg3 />} /> */}
                    </>
                    : null}
            </div>

            {/* bottom gradient */}
            {/* <div style={{
                position: "absolute", 
                backgroundColor: "blue",
                backgroundImage: "linear-gradient(rgba(253,251,249,0),rgba(253,251,249,1), #FDFBF9)", // bottom gradient
                height: 140,
                // width: "89%",
                bottom: 0,
                width: "100%",
                marginLeft:"10%"
                }}>
            </div> */}
        </div>
    );
}

export default Index;