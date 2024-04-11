import React from 'react';
import { MoreSvg, RemindSvg } from "../../../../assets/images/icons";
import { Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { UIState, LoginState } from "../../../../utils/globalState";

function Index(props) {
    const setReminder = UIState((state) => state.setReminder)
    const reminder = UIState((state) => state.reminder)

    const setMyself = UIState((state) => state.setMyself)
    const myself = UIState((state) => state.myself)

    const setOutline = UIState((state) => state.setOutline)
    const outline = UIState((state) => state.outline)

    const username = LoginState((state) => state.username); // 从全局状态中获取username

    return (
        <>
            <div style={{ height: "36%", width: "100%", backgroundColor: "rgba(0,0,0,0)" }}></div>
            <div style={{ height: "54%", width: "100%", marginBottom: "0.1em",  backgroundColor: ""}}>
                <Row >
                    <Col onClick={() => setMyself(myself)}
                        style={{
                            paddingTop: "0.3em",
                            paddingLeft: "0.4em",
                            paddingBottom: "0.3em",
                            textAlign: "left",
                            borderRadius: 8,
                            // backgroundColor: myself ? "rgba(255,130,48,0.1)" : "rgba(255,130,48,0)"
                        }}>
                        <Row style={{display: "inline-flex"}}>
                            <Avatar size={38} icon={<UserOutlined />} style={{ borderRadius: 8 }}></Avatar>
                            <div style={{ 
                                fontSize: "1.5em", 
                                fontWeight: "bold", 
                                textAlign: "center", 
                                paddingTop: ".2em", 
                                paddingLeft: ".8em" 
                            }}>
                                {username}
                            </div>
                            <div style={{width: "2em"}}></div>
                        </Row>
                    </Col>

                    <Col onClick={() => setReminder(reminder)} 
                        style={{
                        paddingTop: "0.7em",
                        paddingBottom: "0.3em",
                        paddingLeft: "0.1em",
                        paddingRight: "0.70m",
                        // textAlign:"left",
                        borderRadius: 8,
                        backgroundColor: reminder ? "rgba(255,130,48,0.1)" : "rgba(255,130,48,0)"
                    }}>
                        <RemindSvg style={{ display: "inline", width: 32, height: 31, zIndex: 2 }} />
                    </Col>

                    <Col style={{width: "2em"}}></Col>

                    {false ? <Col style={{ paddingTop: "0.6em", paddingLeft: "0.2em", textAlign: "right" }}>
                        {true ?
                            <div onClick={() => setOutline(outline)}>
                                <MoreSvg style={{ display: "inline" }} />

                            </div> : null
                        }
                    </Col> : null}
                </Row>
            </div>
            {/*<MenuOutlined style={{fontSize:84,position:"relative",top:26,marginLeft:64}}/>*/}
            <div style={{ height: "5%", width: "100%", backgroundColor: "rgba(0,0,0,0)" }}></div>
        </>
    );
}

export default Index;