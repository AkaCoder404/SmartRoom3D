import React from 'react';
import {Col, Row} from "antd";
import OutlineCard from "./OutlineCard";

function Index(props) {
    return (
        <div style={{
            width: "22.3vw", height: "83.5vh",
            position: 'fixed',
            right:"0%",
            top: "16.5%",
            bottom: 0,
            borderTopRightRadius: 0,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(253,251,249,0.1)",
            zIndex:30
        }} key="demo1">
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
                        color: "rgba(16,16,16,0.5)"
                    }} key={props.selected}>概览
                    </div>
                </Col>
            </Row>
            <OutlineCard/>
            <OutlineCard/>
            <OutlineCard/>
            <OutlineCard/>


        </div>
    );
}

export default Index;