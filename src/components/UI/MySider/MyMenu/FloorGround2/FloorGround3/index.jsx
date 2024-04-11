import React, { useState, useEffect } from 'react';
import { Col, Row } from "antd";
import { SofaSvg2, StudySvg2, CookSvg2, ToiletSvg2, BedRoomSvg2 } from "../../../../../../assets/images/icons";
import { menu2state } from "../../../../../../utils/globalState";

import Calendar from 'react-calendar';
import { useTranslation } from "react-i18next"; // i18n
import styled from 'styled-components';
import { format } from 'date-fns';
import { Slider, Tag } from 'antd';

function Index(props) {
    const menu3 = menu2state((state) => state.menu3)
    const setMenu3Global = menu2state((state) => state.setMenu3)
    const { t } = useTranslation(); // language
    const [dateState, setDateState] = useState(new Date()); // time
    const [date, onChange] = useState(new Date());
    // const {eventTime, onChangeEventTime} = "12:00";
    const [playState, setPlayEventState] = useState(false);

    // slider
    const [inputValue, setInputValue] = useState(50);
    const onChangeSlider = (newValue) => {
        // console.log("onChangeSlider", newValue);
        if (!playState) {
            // console.log("onChangeSlider", newValue);
            setInputValue(newValue);
        }
    };

    // play slider button
    const onClickPlayEvents = () => {
        console.log("onClickPlayEvents", !playState);
        setPlayEventState(!playState);
    }

    // live calendar
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000); // update date every 30 second
    }, []);

    // 
    useEffect(() => {
        const playInterval = setInterval(() => {
            // after play button is pressed
            // console.log("playInterval", playState, inputValue);
            var state = playState;
            if (state && inputValue < 3600) {
                setInputValue(inputValue => inputValue + 2);
            }
            else if (state === false) {
                // setInputValue(50);
                setPlayEventState(false);
                // clearInterval(playInterval);
            }
        }, 50); // update slider every 5 seconds

        return () => clearInterval(playInterval);
    }, [playState, inputValue]);

    const locale = "zh-cn";

    const marks = {
        // 0:"0",
        // 0.5: "0.5",
        // 1:"1", 
        // 1.5:"1.5",
        // 2:"2", 
        // 54.5: "sds"
    };

    return (
        <>
            <Row style={{}} >
                <Col span={3}>
                    <div style={{
                        fontSize: "2.7em",
                        lineHeight: "100%",
                        textAlign: "left",
                        marginTop: "0.9em",
                        marginLeft: "0.6em",
                        fontWeight: "bold",
                    }} key={props.selected}>{t("floor")}</div>
                </Col>
                <div style={{
                    height: "3.1em",
                    width: "65%", // used to be 55%
                    marginTop: "2.2em",
                    marginLeft: "1.6em",
                }}>
                    {/* 客厅 */}
                    <Row justify="space-between">
                        <Col span={4} onClick={() => setMenu3Global(1)}>
                            <div style={{
                                backgroundColor: menu3 === 1 ? "rgba(255,130,48,0.1)" : "white",
                                height: "3.2em",
                                borderRadius: 8,
                                textAlign: "center",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.05)"
                            }}>
                                <div style={{
                                    color: menu3 === 1 ? "rgba(255,130,48,1)" : "rgba(0,0,0,0.2)",
                                    display: "inline-block",
                                    position: "absolute",
                                    left: "1.5em", top: "0.6em"
                                }}><SofaSvg2 /></div>
                                <div style={{
                                    paddingLeft: "1.2em", display: "inline-block",
                                    position: "absolute",
                                    left: "2.5em", fontSize: "1.2em", fontWeight: "bold", top: "0.6em",
                                    color: "rgba(16,16,16,0.5)"
                                }}>{t("livingroom")}</div>
                            </div>
                        </Col>
                        {/* 书房 */}
                        <Col span={4} onClick={() => setMenu3Global(2)}>
                            <div style={{
                                backgroundColor: menu3 === 2 ? "rgba(255,130,48,0.1)" : "white",
                                height: "3.2em",
                                borderRadius: 8,
                                textAlign: "left",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.05)"

                            }}>
                                <div style={{
                                    color: menu3 === 2 ? "rgba(255,130,48,1)" : "rgba(0,0,0,0.2)",
                                    display: "inline-block",
                                    position: "absolute",
                                    left: "1.5em", top: "0.6em"
                                }}><StudySvg2 /></div>
                                <div style={{
                                    paddingLeft: "1.2em", display: "inline-block",
                                    position: "absolute",
                                    left: "2.55em", fontSize: "1.2em", fontWeight: "bold", top: "0.6em",
                                    color: "rgba(16,16,16,0.5)"
                                }}>{t("bookroom")}</div>
                            </div>

                        </Col>
                        {/* 厨房 */}
                        <Col span={4} onClick={() => setMenu3Global(3)}>
                            <div style={{
                                backgroundColor: menu3 === 3 ? "rgba(255,130,48,0.1)" : "white",
                                height: "3.2em",
                                borderRadius: 8,
                                textAlign: "left",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.05)"

                            }}>
                                <div style={{
                                    color: menu3 === 3 ? "rgba(255,130,48,1)" : "rgba(0,0,0,0.2)",
                                    display: "inline-block",
                                    position: "absolute",
                                    left: "1.7em", top: "0.8em"
                                }}><CookSvg2 /></div>
                                <div style={{
                                    paddingLeft: "1.2em", display: "inline-block",
                                    position: "absolute",
                                    left: "2.6em", fontSize: "1.2em", fontWeight: "bold", top: "0.6em",
                                    color: "rgba(16,16,16,0.5)"
                                }}>{t("kitchen")}</div>
                            </div>
                        </Col>
                        {/* 厕所 */}
                        <Col span={4} onClick={() => setMenu3Global(4)}>
                            <div style={{
                                backgroundColor: menu3 === 4 ? "rgba(255,130,48,0.1)" : "white",
                                height: "3.2em",
                                borderRadius: 8,
                                textAlign: "left",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.05)"
                            }}>
                                <div style={{
                                    color: menu3 === 4 ? "rgba(255,130,48,1)" : "rgba(0,0,0,0.2)",
                                    display: "inline-block",
                                    position: "absolute",
                                    left: "1.4em", top: "0.6em"
                                }}><ToiletSvg2 /></div>
                                <div style={{
                                    paddingLeft: "1.2em", display: "inline-block",
                                    position: "absolute",
                                    left: "1.9em", fontSize: "1.2em", fontWeight: "bold", top: "0.58em",
                                    color: "rgba(16,16,16,0.5)"
                                }}>{t("bathroom")}</div>
                            </div>
                        </Col>
                        {/* 卧室 */}
                        <Col span={4} onClick={() => setMenu3Global(5)}>
                            <div style={{
                                backgroundColor: menu3 === 5 ? "rgba(255,130,48,0.1)" : "white",
                                height: "3.2em",
                                borderRadius: 8,
                                textAlign: "left",
                                boxShadow: "0px 4px 16px rgba(0,0,0,0.05)"

                            }}>
                                <div style={{
                                    color: menu3 === 5 ? "rgba(255,130,48,1)" : "rgba(0,0,0,0.2)",
                                    display: "inline-block",
                                    position: "absolute",
                                    left: "1.6em", top: "0.55em"
                                }}><BedRoomSvg2 /></div>
                                <div style={{
                                    paddingLeft: "1.2em", display: "inline-block",
                                    position: "absolute",
                                    left: "2.7em", fontSize: "1.2em", fontWeight: "bold", top: "0.58em",
                                    color: "rgba(16,16,16,0.5)"
                                }}>{t("bedroom")}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Row>
            {/*  */}
            <div style={{
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                left: "2%",
                top: "8.8%", // use to be 10.8
                width: "49.5vw",
                height: "80%", // use to be 78
                backgroundColor: "#FCFCFC",
                borderRadius: 18,
                position: "absolute"
            }}>
                <div style={{
                    position: "absolute",
                    backgroundColor: "rgba(255,130,48,0.1)",
                    borderRadius: 18,
                    top: "68%",
                    // left: "2%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    width: "96%",
                    height: "30%",
                    marginBottom: "2%",
                }}>
                    <Row style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "yellow",
                        // alignContent: "center"
                    }}>
                        <Col span={9} style={{
                            backgroundColor: "white",
                            borderRadius: 15,
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "1vw",
                            paddingRight: "1vw",
                            marginLeft: "0.5vw",
                            marginRight: "0.5vw",
                            marginTop: "0.5vw",
                            marginBottom: "0.5vw"

                        }}
                        >
                            <Container>
                                <Calendar
                                    onChange={onChange}
                                    defaultValue={dateState}
                                    calendarType="US"
                                    value={date}
                                    locale={locale}
                                    // formatWeekday = {(locale, date) => format(date, 'e', locale)}
                                    formatShortWeekday={(locale, date) => ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]}
                                    formatDay={(locale, date) => format(date, "d", locale)}
                                />
                            </Container>
                        </Col>

                        <Col span={14} style={{ borderRadius: 20 }}>
                            {/* <div
                                style={{ width: "100%", height: "3vh",  marginLeft: "0.5vw",
                                    marginRight: "0.5vw",
                                    marginTop: "0.5vw",
                                    marginBottom: "0.5vw",
                                    backgroundColor: '#0000000A',
                                    borderRadius: 10,
                                }}
                           ></div> */}
                            <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "3.25vh" }}>
                                    <div>00:00</div>
                                    <div>{inputValue}</div>
                                    <div>24:00</div>
                                </div>
                                <Container style={{ marginTop: "3vh" }}>
                                    <Slider marks={marks}
                                        min={0}
                                        max={3600}
                                        steps={1}
                                        included={false}
                                        // tooltipVisible={false}
                                        tooltip={{ open: false }}
                                        defaultValue={50}
                                        onChange={onChangeSlider}
                                        value={inputValue} />
                                </Container>
                                <div style={{ position: "absolute", bottom: "1.5vh", right: 0 }}>
                                    <Tag color={playState ? "#FFB800" : "red"}
                                        style={{ borderRadius: "5px", padding: "0.5em" }}
                                        onClick={onClickPlayEvents}
                                    >人员移动</Tag>
                                    <Tag color="#00E5A1" style={{ borderRadius: "5px", padding: "0.5em" }}>人员移动</Tag>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={{
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                left: "60.1%",
                top: "8.8%",
                width: "33.6vw",
                height: "80%",
                backgroundColor: "white", // floor view right
                borderRadius: 18,
                position: "absolute"
            }}>
            </div>
        </>
    );
}

export default Index;


const Container = styled.div`
.react-calendar {
  background: white;
  /* border: 1px solid #a0a096; */
  font-family: Arial, Helvetica, sans-serif;
}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}

.react-calendar__navigation {
    background-color: white;
}

.react-calendar__navigation__label,
.react-calendar__navigation__arrow {
    background: white;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 5px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
  border: none;
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
  border-radius: 20px;
}
.react-calendar__tile--now {
//   background: #A098AE;  
  border-radius: 20px;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #A098AE;
  border-radius: 20px;
}
.react-calendar__tile--hasActive {
  background: rgba(255,130,48,0.1);
  border-radius: 20px;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: rgba(255,130,48,0.1);
  border-radius: 20px;
}

.react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;                 // text color days not in this month
    // text-decoration: none;      // remove underline
}


.react-calendar__tile--active {
  background: rgba(255,130,48,0.1);
  border-radius: 20px;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: rgba(255,130,48,0.1);
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}

.react-calendar__month-view__weekdays__weekday abbr{
    text-decoration: none; // remove underline from weekday
    font-weight: bold;
}


// slider edit
.ant-slider,
.ant-slider-horizontal, 
.ant-slider-with-marks {
    height: 3vh;
}

.ant-slider-rail {
    background: #0000000A;
    height: 5vh;
}

.ant-slider-step {
    height: 3vh;
}

.ant-slider-dot {
    height: 5.0vh;
    width: 0.1vw;
    margin-top: 0.20vh;
    background: #00E5A1;
    border: 1px solid #00E5A1;
        border-radius: 0px;
        padding-top: -0.5vh;
}

.ant-slider-handle {
    margin-top: -2vh;
    padding-bottom: 8vh;
    width: 0.1vh;
    border-radius: 0px;
    background: black;
    height: 3vh;
    border: 1px solid #000000;
}
.ant-slider-mark {
    margin-top: 2vh;
    display: none;
}
.ant-slider-mark-text {
    margin-top: 2vh;
}
`