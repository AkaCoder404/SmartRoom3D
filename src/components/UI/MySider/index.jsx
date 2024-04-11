import React, {Component} from 'react';
import {Layout} from "antd";
import "./index.css"
import MyMenu from "./MyMenu";

const {Sider} = Layout;

class MySider extends Component {

    render() {
        return (
            <>
            <Sider width="11%"
                breakpoint="md"
                collapsedWidth={70}
                className="site-layout-background sider-layout"
                style={{
                    // overflow: 'auto',
                    height: '100%',
                    position: 'fixed',
                    left: 0,
                    top: "0%", // errors
                    bottom: 0,
                    zIndex:3,
                }}>
                <MyMenu></MyMenu>
            </Sider>

            <div
                style={{
                    width:1,
                    // overflow: 'auto',
                    height: '93vh',
                    position: 'fixed',
                    left: "11%",
                    top: "0%", // errors
                    bottom: 0,
                    backgroundColor:"#ECEDEF",
                    zIndex:3
                    }}>
            </div>

            </>
        );
    }
}

export default MySider;