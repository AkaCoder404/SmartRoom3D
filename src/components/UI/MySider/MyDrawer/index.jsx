import React, { Component } from 'react';
import { Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import MyMenu from "../MyMenu";

class MyDrawer extends Component {
    render() {
        return (
            <Drawer
                title={<span style={{ color: "white" }}>结果展示</span>}
                placement={"left"}
                closable={true}
                onClose={() => this.props.onClose(false)}
                open={this.props.collapseDrawer}
                key={"left"}
                width={"55%"}
                styles={{ body: { padding: 0 }, header: { backgroundColor: "#2f2f55" } }}
                closeIcon={<MenuFoldOutlined style={{ color: "white" }} />}
            >
                <MyMenu></MyMenu>
            </Drawer>
        );
    }
}

export default MyDrawer;