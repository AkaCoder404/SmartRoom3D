import React from 'react';
import {Row, Col, Divider, message} from "antd";
import {logoutSvg} from "../../../assets/images/icons";
import Icon from "@ant-design/icons";
import { UserOutlined, QuestionCircleOutlined, GlobalOutlined } from '@ant-design/icons';

import { useTranslation } from "react-i18next";
import { i18n } from "../../../i18n";
import LoginModal from '../Modal/LoginModal';
import HelpModal from '../Modal/HelpModal';
import AboutMeModal from '../Modal/AboutMeModal';

import { LoginState, AboutModalState } from '../../../utils/globalState';

var current_lang = i18n.language;

function Myself(props) {
    // change language
    const { t } = useTranslation();
    const changeLanguage = (event) => { 
        var new_lang = "";
        if (current_lang === "zh") {
            new_lang = "en";
            current_lang = "en"
        }
        else {
            current_lang = "zh";
            new_lang = "zh";
        }
        i18n.changeLanguage(new_lang);
    };

    // login global state
    const login = LoginState((state) => state.login);
    const setLogin = LoginState((state) => state.setLogin);
    const setUsername = LoginState((state) => state.setUsername);
    const loginModalVisible = LoginState((state) => state.loginModalVisible);
    const setLoginModalVisible = LoginState((state) => state.setLoginModalVisible);
    const aboutModalVisible = AboutModalState((state) => state.aboutModalVisible);
    const setAboutModalVisible = AboutModalState((state) => state.setAboutModalVisible);
    const helpModalVisible = AboutModalState((state) => state.helpModalVisible);
    const setHelpModalVisible = AboutModalState((state) => state.setHelpModalVisible);

    const onClickLoginLogout = () => {
        if (login) {
            setLogin(false);
            setUsername("YYYYY");
            message.success({
                content: t("logoutSuccess"),
                style: {
                    marginTop: '10vh',
                }
            });

        } else if (login === false) { setLoginModalVisible(true); }
    }

    // user information
    const setUserInformation = () => { setAboutModalVisible(true); }

    // help menu
    const setHelp = () => { setHelpModalVisible(true); }


    return (
        <div style={{
            width:'14vw',
            // height:'32.5vh',
            height: '20.5vh',
            backgroundColor:"white",
            zIndex:30,
            position:"absolute",
            right:'5vw',
            // top:'17.6vh',
            top:"11vh",
            boxShadow:"0px 1px 10px rgba(0,0,0,0.25)",
            borderRadius:20
        }}>
            {/* <Row style={{height:"5%", backgroundColor: "blue"}}></Row> */}
            <Row style={{
                height:"22%",
                fontSize:'0.85rem',
                alignContent:'center',
                // backgroundColor: "blue"
                }}
                onClick={()=>setUserInformation()}
            >   
                <Col span={4} style={{
                    alignSelf:'center', 
                    textAlign:'center',
                    marginTop:9,
                    marginLeft: "1.5vw"
                    }}>
                        <UserOutlined />
                </Col>
                <Col span={11} style={{
                    marginLeft:0,
                    color:'#000000',
                    marginTop:9,
                    fontWeight:'bold',
                    textAlign:'left'
                    }}
                >
                    {t("userinformation")} 
                </Col>
            </Row>
            <Divider style={{margin:0}}/>

            <Row style={{
                height:"22.0%",
                fontSize:'0.85rem',
                alignContent:'center',
                // backgroundColor: "red",
                }}
                onClick={()=>setHelp()}
            >
                <Col span={4} style={{
                    alignSelf:'center', 
                    textAlign:'center',
                    marginTop:9,
                    marginLeft: "1.5vw"
                    }}>
                       <QuestionCircleOutlined />
                </Col>
                <Col span={11} style={{
                    color:'#000000',
                    marginTop:9,
                    fontWeight:'bold',
                    textAlign:'left'
                }}>
                    {t("help")}
                </Col>
            </Row>
            <Divider style={{margin:0}}/>


            <Row style={{
                height:"22%",
                fontSize:'0.85rem',
                alignContent:'center',
                // backgroundColor: "green"
                }}
                onClick={changeLanguage}
                >
                <Col span={4} style={{
                    alignSelf:'center', 
                    textAlign:'center',
                    marginTop:9,
                    marginLeft: "1.5vw"
                    }}>
                       <GlobalOutlined />
                </Col>
                <Col span={11} style={{
                    color:'#000000',
                    marginTop:9,
                    fontWeight:'bold',
                    textAlign:'left'
                }}>      
                    {t("language")}
                </Col>
            </Row>
            <Divider style={{margin:0}}/>


            <Row style={{
                height:"22%",
                fontSize:'0.85rem',
                alignContent:'center',
                }}
                onClick={onClickLoginLogout}
                >
                <Col span={4} style={{
                    alignSelf:'center', 
                    textAlign:'center',
                    marginTop:9,
                    marginLeft: "1.5vw"
                    }}>
                       <Icon component={logoutSvg}/>
                </Col>
                <Col span={11} style={{
                    color:'#000000',
                    marginTop:9,
                    fontWeight:'bold',
                    textAlign:'left'
                }}>      
                    {login ? t("logout") : t("login")}
                </Col>
            </Row>
            <Divider style={{margin:0}}/>



            {/* <Row style={{
                height:"20%",
                fontSize:'0.85rem',
                alignContent:'center',
                // backgroundColor: "orange"
                }}>
                <Col span={24} style={{}}>
                    <Button style={{
                        backgroundColor:'rgba(0,0,0,0.04)',
                        border:'none',
                        width:"80%",
                        color:'#ff8230',
                        fontWeight:'bold',
                        borderRadius:10
                    }}><Icon component={logoutSvg}/>{t("logout")}</Button>
                </Col>
            </Row> */}
            {/* Modals */}
            <LoginModal visible={loginModalVisible} > </LoginModal>
            <HelpModal visible={helpModalVisible} > </HelpModal>
            <AboutMeModal visible={aboutModalVisible} > </AboutMeModal>
        </div>
    );
}

export default Myself;