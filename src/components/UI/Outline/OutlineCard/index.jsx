import React from 'react';
import {Col, Row} from "antd";
import {cloudSvg, openSvg} from "../../../../assets/images/icons";
import Icon from "@ant-design/icons";
function Index(props) {
    return (
        <Row style={{height:'10%',marginTop:10,marginBottom:20}}>
            <Col span={21} offset={1} style={{
                backgroundColor:"white",
                boxShadow:"0px 4px 4px rgba(0,0,0,0.25)",marginLeft:20,borderRadius:10
            }}>
                <Row>
                    <Col span={7}>
                <div style={{
                    height:50,backgroundColor:"#CCD5D7",
                    margin:"20px 20px 0 20px",
                    borderRadius:16,
                    width:50,
                    display:'inline-block'
                }}><Icon component={cloudSvg} style={{margin:'11px 12px'}}></Icon>

                </div>
                    </Col>
                    <Col span={13} style={{
                        marginTop:21,
                        marginLeft:2,
                        textAlign:"left"
                    }}>
                        <div style={{fontSize:19,fontWeight:"bold",color:"#101010"}}>21° 多云</div>
                        <div style={{fontSize:12,color:"rgba(16,16,16,0.7)"}}>今日天气</div>

                    </Col>
                    <Col span={3} style={{marginTop:20,paddingTop:15}}>
                        <Icon component={openSvg}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Index;