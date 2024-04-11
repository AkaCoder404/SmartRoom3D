import React, {Component} from 'react';
import {Row, Col} from "antd";
import './index.css'

import Weather from "./Search";
import Time from "./Time";
import Profile from "./Profile";

class MyHeader extends Component {
    state ={
        collapseFont : false,
        headerLeft : 0,
        headerRight : 0,
        myId:1,
        pathname:"",
        displayUser:false,
    }
    componentDidMount() {
        this.onCollapse()
        window.addEventListener('resize',this.onCollapse)
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.onCollapse)
    }
    onCollapse = () =>{
        const width = document.documentElement.clientWidth
        const isCollapse = width<=768?true:false
        if(isCollapse){
            this.setState({
                collapseFont :true,
                headerRight :0,
            })
        }
        else {
            this.setState({
                collapseFont :false,
                headerRight :0,
            })
        }
    }

    render() {
        const {headerRight,headerLeft} = this.state
        return (
            <div style={{
                paddingRight:headerRight,
                paddingLeft:headerLeft,
                position:"fixed",
                zIndex:3,
                width:"89%",
                height:"9.5%",
                top:"0%", // errors
                left:"11%",
                backgroundColor:"white"
            }}>
                <Row style={{height:"100%", display: "flex", justifyContent: "space-between"}}>
                    <Col style={{}}>{false ? <Weather/>:null}</Col>
                    <Col style={{}}><Time/></Col>
                    <Col style={{}}><Profile/></Col>
                </Row>
                <Row style={{backgroundColor:"#ECEDEF",height:1,width:"100%"}}></Row>
            </div>

        );
    }
}

export default MyHeader;