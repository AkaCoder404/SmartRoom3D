import React from 'react';
import {Row, Col, Avatar} from "antd";
import {SofaSvg3} from "../../../assets/images/icons";
import {UserOutlined} from "@ant-design/icons";

// language
import { useTranslation } from "react-i18next";
// import { i18n } from "../../../assets/i18n";


function Reminder(props) {
    const { t } = useTranslation();     // language

    return (
        <div style={{
            width:'22vw',
            height:'32.5vh',
            backgroundColor:"white",
            zIndex:30,
            position:"absolute",
            right:'1.1vw',
            // top:'17.2vh',
            top: '11vh',
            boxShadow:"0px 1px 10px rgba(0,0,0,0.25)",
            borderRadius:20
        }}>
            <Row style={{
                height:"25.5%",
                fontSize:'1.6rem',
                alignContent:'center'
            }}>
                <Col span={11} style={{
                    marginLeft:3,
                    fontWeight:'bold',
                    color:'#EFB00D',
                    marginTop:9
                }}>
                    {t("specialevents")}
                </Col>
            </Row>
            <Row style={{
                height:"12.6%"
            }}>
                <Col span={6} style={{
                    letterSpacing:0.3,
                    fontSize:'0.85rem',
                    marginLeft:8,
                    color:'rgba(16,16,16,0.5)'
                }}>
                    06 : 00
                </Col>
                <Col span={15} style={{
                    height:"100%",
                    marginTop:9
                }}>
                    <div style={{borderTop:'2px solid rgba(0,0,0,0.04)',paddingTop:8,fontSize:'0.9rem',color:'rgba(16,16,16,0.5)'}}>
                        <Row>
                            <Col span={3} style={{color:"rgba(0,0,0,0.2)"}}><SofaSvg3/></Col>
                            <Col span={5}><span>{t("livingroom")}</span></Col>
                            <Col span={13} style={{marginLeft:6}}>
                                <Avatar size={22} icon={<UserOutlined />} style={{borderRadius:8}}/>
                                <span style={{display:'inline-block',marginLeft:4}}>画面变动</span></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <Row style={{
                height:"12.6%"
            }}>
                <Col span={6} style={{
                    letterSpacing:0.3,
                    fontSize:'0.85rem',
                    marginLeft:8,
                    color:'rgba(16,16,16,0.5)'
                }}>
                    06 : 00
                </Col>
                <Col span={15} style={{
                    height:"100%",
                    marginTop:9
                }}>
                    <div style={{borderTop:'2px solid rgba(0,0,0,0.04)',paddingTop:8,fontSize:'0.9rem',color:'rgba(16,16,16,0.5)'}}>
                        <Row>
                            <Col span={3} style={{color:"rgba(0,0,0,0.2)"}}><SofaSvg3/></Col>
                            <Col span={5}><span>{t("livingroom")}</span></Col>
                            <Col span={13} style={{marginLeft:6}}>
                                <Avatar size={22} icon={<UserOutlined />} style={{borderRadius:8}}/>
                                <span style={{display:'inline-block',marginLeft:4}}>画面变动</span></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <Row style={{
                height:"12.6%"
            }}>
                <Col span={6} style={{
                    letterSpacing:0.3,
                    fontSize:'0.85rem',
                    marginLeft:8,
                    color:'rgba(16,16,16,0.5)'
                }}>
                    06 : 00
                </Col>
                <Col span={15} style={{
                    height:"100%",
                    marginTop:9
                }}>
                    <div style={{borderTop:'2px solid rgba(0,0,0,0.04)',paddingTop:8,fontSize:'0.9rem',color:'rgba(16,16,16,0.5)'}}>
                        <Row>
                            <Col span={3} style={{color:"rgba(0,0,0,0.2)"}}><SofaSvg3/></Col>
                            <Col span={5}><span>{t("livingroom")}</span></Col>
                            <Col span={13} style={{marginLeft:6}}>
                                <Avatar size={22} icon={<UserOutlined />} style={{borderRadius:8}}/>
                                <span style={{display:'inline-block',marginLeft:4}}>画面变动</span></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <Row style={{
                height:"12.6%"
            }}>
                <Col span={6} style={{
                    letterSpacing:0.3,
                    fontSize:'0.85rem',
                    marginLeft:8,
                    color:'rgba(16,16,16,0.5)'
                }}>
                    06 : 00
                </Col>
                <Col span={15} style={{
                    height:"100%",
                    marginTop:9
                }}>
                    <div style={{borderTop:'2px solid rgba(0,0,0,0.04)',paddingTop:8,fontSize:'0.9rem',color:'rgba(16,16,16,0.5)'}}>
                        <Row>
                            <Col span={3} style={{color:"rgba(0,0,0,0.2)"}}><SofaSvg3/></Col>
                            <Col span={5}><span>{t("livingroom")}</span></Col>
                            <Col span={13} style={{marginLeft:6}}>
                                <Avatar size={22} icon={<UserOutlined />} style={{borderRadius:8}}/>
                                <span style={{display:'inline-block',marginLeft:4}}>画面变动</span></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <Row style={{
                height:"12.6%"
            }}>
                <Col span={6} style={{
                    letterSpacing:0.3,
                    fontSize:'0.85rem',
                    marginLeft:8,
                    color:'rgba(16,16,16,0.5)'
                }}>
                    06 : 00
                </Col>
                <Col span={15} style={{
                    height:"100%",
                    marginTop:9
                }}>
                    <div style={{borderTop:'2px solid rgba(0,0,0,0.04)',paddingTop:8,fontSize:'0.9rem',color:'rgba(16,16,16,0.5)'}}>
                        <Row>
                            <Col span={3} style={{color:"rgba(0,0,0,0.2)"}}><SofaSvg3/></Col>
                            <Col span={5}><span>{t("livingroom")}</span></Col>
                            <Col span={13} style={{marginLeft:6}}>
                                <Avatar size={22} icon={<UserOutlined />} style={{borderRadius:8}}/>
                                <span style={{display:'inline-block',marginLeft:4}}>画面变动</span></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Reminder;