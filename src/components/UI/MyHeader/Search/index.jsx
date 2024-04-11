import React from 'react';
import {SearchSvg} from "../../../../assets/images/icons";
import {Col, Row} from "antd";

function Index(props) {
    return (
        <>
            <div style={{backgroundColor:"rgba(255,0,0,0)",height:"25%",width:"100%"}}>
            </div>
            <div style={{backgroundColor:"rgba(0,0,0,0.02)",height:"60%",width:"100%",borderRadius:"1rem"}}>
                <div style={{backgroundColor:"rgba(255,0,0,0)",height:"30%",width:"100%"}}></div>
                <Row style={{backgroundColor:"rgba(255,0,0,0)",width:"100%",height:"40%",paddingLeft:"1.3em"}}>
                    <Col span={2}><SearchSvg/></Col>
                    <Col span={18} style={{paddingLeft:"0.7em"}}><input type="text" style={{border:"none",backgroundColor:"rgba(0,0,0,0)",
                        color:"#B1ABAA",fontWeight:"bold",outline:"none",fontSize:"1.1em"}} placeholder="压力传感器..."/>
                    </Col>
                </Row>

                {/*<input/>*/}
            {/*<Cloud width={144} height={144} style={{marginLeft:44}}></Cloud>*/}
            {/*<div style={{width:200,height:144,display:"inline-block"}}>*/}
            {/*    <div style={{fontSize:70,fontWeight:900,position:"relative",top:-14,left:6}}>21°</div>*/}
            {/*    <div style={{fontSize:22,position:"relative",top:-28,left:6}}>*/}
            {/*        11° <span style={{fontSize:40,position:"relative",top:4}}>~</span> 28°</div>*/}

            {/*</div>*/}
            </div>
            <div style={{backgroundColor:"rgba(255,0,0,0)",height:"15%",width:"100%"}}>
            </div>
        </>
    );
}

export default Index;