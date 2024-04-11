import React, { /*useEffect, */ useState } from 'react';
import { FloorSvg, SofaSvg, StudySvg, toiletPaperSvg, kitchenSvg } from "../../../../assets/images/icons";
import { Bed } from '../../../../assets/images/icons';

// import Logo from "../../../../assets/images/icons/HouseLogo.png";
import Logo from "../../../../assets/images/icons/iSpaceLogo.jpg";
import './index.css'
import Icon from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import { menu2state } from "../../../../utils/globalState";
import FloorGround2 from "./FloorGround2";
import FloorGround3 from "./FloorGround2/FloorGround3";
import MyMenu3 from "./MyMenu2/MyMenu3";

// language
import { useTranslation } from "react-i18next";

function Menu1Back(props) {
    return (
        <div style={{ display: "flex", height: "9.5%", alignContent: "center", borderBottom: "1px solid #E8E8E8" }}
            onClick={props.onClick ? props.onClick : () => props.select(props.key1)}
        >
            <img src={Logo}
                style={{
                    width: "66%",
                    margin: "auto",
                    // paddingTop: '2.5vh'
                }}
                alt="logo" />
        </div>
    )
}

function Menu1Button(props) {
    return (
        <div style={{ display: "flex", ...props.style }}
            onClick={props.onClick ? props.onClick : () => props.select(props.key1)}>
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div style={{
                    backgroundColor: props.selected === props.key1 ? "rgba(255,130,48,0.1)" : "rgba(0,0,0,0.04)", borderRadius: '1rem', width: '3.7rem', height: '3.7rem'
                    , textAlign: "center", lineHeight: '3.7rem',
                    fontSize: '2.2rem', color: props.selected === props.key1 ? "#FF8230" : "#BEBEBE"
                }}>
                    <Icon style={{}} component={props.Svg} />
                </div>
                <span
                    style={{
                        display: "block", fontSize: '1rem',
                        textAlign: "center", marginTop: '1.3rem',
                        fontWeight: "bold", color: props.selected === props.key1 ? '#FF8230' : 'rgba(16,16,16,0.5)'
                    }}
                >{props.name}</span>
            </div>
        </div>
    )
}

function Index() {
    const setMenu2Global = menu2state((state) => state.setMenu2)
    const menu2 = menu2state((state) => state.menu2)
    const setMenu3Global = menu2state((state) => state.setMenu3)
    const menu3 = menu2state((state) => state.menu3)

    const select = (key) => {
        if (menu2 !== 0 && key === menu2) {
            setMenu2Global(0)
            setMenu3Global(0)
            console.log("menu2", menu2);
            console.log("menu3", menu3);
        }
        else {
            setMenu2Global(key)
            setMenu3Global(0)
        }

    }
    const closeAll = () => {
        setMenu2Global(0)
        setMenu3Global(0)
        console.log(menu2)
        console.log(menu3)
    }

    const AnimFloorGround2 = animated(FloorGround2)
    const { left, opacity } = useSpring({
        left: menu2 === 0 ? "0%" : "11%",
        opacity: menu2 === 0 ? 0 : 1,
        onRest: () => {
            if (menu2 === 0) {
                setDisplay('none')
            }
        },
        onStart: () => {
            if (menu2 !== 0) {
                setDisplay('block')

            }
        }
    })
    const { left1, opacity1 } = useSpring({
        left1: menu3 === 0 ? "0%" : "11%",
        opacity1: menu3 === 0 ? 0 : 1,
        onRest: () => {
            if (menu3 === 0) {
                setDisplay1('none')
            }
        },
        onStart: () => {
            if (menu3 !== 0 && menu2 === 2) {
                setDisplay1('block')

            }
        }
    })
    const { left2, opacity2 } = useSpring({
        left2: menu3 === 0 ? "11%" : "32.6%",
        opacity2: menu3 === 0 ? 0 : 1,
        onRest: () => {
            if (menu3 === 0) {
                setDisplay2('none')
            }
        },
        onStart: () => {
            if (menu3 !== 0 && menu2 !== 2) {
                setDisplay2('block')

            }
        }
    })
    const [display, setDisplay] = useState('none')
    const [display1, setDisplay1] = useState('none')
    const [display2, setDisplay2] = useState('none')

    const { t } = useTranslation();

    return (
        <div style={{ backgroundColor: 'white', height: '100%' }}>
            <Menu1Back key1={1} style={{ backgroundColor: 'white' }} select={select} selected={menu2} onClick={() => closeAll()} />
            <div
                mode="inline"
                style={{ height: '86.5vh', marginTop: '2.0vh', marginBottom: '2.0vh', borderRight: 0, display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}
            >
                <Menu1Button name={t("floor")} Svg={FloorSvg} style={{}} key1={2} select={select} selected={menu2} />
                <Menu1Button name={t("livingroom")} Svg={SofaSvg} style={{}} key1={3} select={select} selected={menu2} />
                <Menu1Button name={t("bookroom")} Svg={StudySvg} style={{}} key1={4} select={select} selected={menu2} />
                <Menu1Button name={t("kitchen")} Svg={kitchenSvg} style={{ marginBottom: ".5em" }} key1={7} select={select} selected={menu2} />
                <Menu1Button name={t("bedroom")} Svg={Bed} style={{}} key1={5} select={select} selected={menu2} />
                <Menu1Button name={t("bathroom")} Svg={toiletPaperSvg} style={{}} key1={6} select={select} selected={menu2} />
            </div>


            {/* Floor Canvas */}
            <AnimFloorGround2
                left={left}
                opacity={opacity}
                display={display}
            />
            <animated.div style={{
                width: "89vw",
                background: 'rgba(253,251,249,0.6)',
                // height: "80.5vh",
                height: "100%",
                // height: "95vh",
                // backgroundColor: "red",
                // overflow: 'auto',
                // overflow: 'hidden',
                position: 'fixed',
                left: left1,
                opacity: opacity1,
                // top: "16.5%",
                top: "9.5%",
                bottom: 0,
                zIndex: 1,
                borderTopRightRadius: 0,
                backdropFilter: "blur(10px)",
                display: display1

            }}>
                <FloorGround3 />
            </animated.div>

            <animated.div style={{
                width: "28.6%", height: "80vh",
                overflow: 'auto',
                position: 'fixed',
                left: left2,
                // top: "25.6%",
                borderRadius: 20,
                top: "19.2%",
                bottom: 0,
                zIndex: 1,
                display: display2,
                opacity: opacity2,
            }} key="demo2">
                <MyMenu3 />
            </animated.div>
        </div>
    );
}
export default Index;