import React from 'react';
import { Col, Row } from "antd";
// import {More2Svg} from "../../../../../assets/images/icons";
// import { UserOutlined } from "@ant-design/icons";
// import {menu2state} from "../../../../../utils/globalState";

// level 1 floating cards
function Index(props) {
    return (
        <Row style={{ marginBottom: "10px" }}>
            <Col span={24} >
                <div style={{
                    height: "100%", borderRadius: 20, backgroundColor: props.key1 === props.menu3 ? "#FEF0E6" : "white",
                    marginLeft: 19, marginTop: 10, marginBottom: 10, marginRight: 34, boxShadow: "0px 4px 16px rgba(0,0,0,0.05)",
                }} onClick={() => props.select(props.key1)}>
                    <Row style={{ paddingTop: 14, paddingLeft: 20, paddingRight: 20 }}>
                        <Col span={2} style={{ color: "rgba(0,0,0,0.2)", fontSize: '1.6rem' }}>{props.icon}</Col>
                        <Col span={7} style={{ color: "rgba(16,16,16,0.5)", fontSize: '1rem', padding: "3px 0px", textAlign: "left", paddingLeft: "1em" }}>{props.title}</Col>
                        {/* <Col span={15} style={{marginTop:7,textAlign:"right"}} ><More2Svg/></Col> */}
                    </Row>
                    {
                        props.cardItems.map((item, index) => {
                            return (
                                <div key={item.key} style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                    <div style={{display: "flex", alignItems: "center", }}>
                                        {/* <div style={{ paddingLeft: 20 }}>  <Avatar size={42} icon={<UserOutlined />} style={{ borderRadius: 8 }} /></div> */}
                                        <div style={{ paddingLeft: 18, fontWeight: "bold"}}> {item.name} </div>
                                    </div>
                                   
                                    <div style={{ textAlign: "right", paddingRight: 9, color: "#FF8230", marginRight: 10}}>  
                                        <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}> {item.value} </span> {item.units}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Col>
        </Row>
    );
}

export default Index;