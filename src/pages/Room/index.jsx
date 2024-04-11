import React, { useEffect, useState } from 'react';
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Index(props) {

    const [collapse, setCollapse] = useState(false)
    const [collapseDrawer, setCollapseDrawer] = useState(false)
    useEffect(() => {
        //添加监听事件，相当于componentDidMount和componentDidUpdate中的代码
        onCollapse()
        window.addEventListener('resize', onCollapse)
        //返回的函数用于解绑事件，相当于componentWillUnmount中的代码
        return () => {
            window.removeEventListener('resize', onCollapse)
        }
    })

    const onCollapse = () => {
        const width = document.documentElement.clientWidth
        const isCollapse = width <= 768 ? true : false
        if (isCollapse) {
            setCollapse(true)
        }
        else {
            setCollapse(false)
        }
    }
    const onClose = (isClose) => {
        console.log("collapseDrawer ", collapseDrawer);
        setCollapseDrawer(isClose)
    }
    return (
        <div>
            <>
                <Button
                    style={{ position: "absolute", top: 12, border: 0, left: 50, display: collapse ? "block" : "none" }}
                    icon={<MenuUnfoldOutlined style={{ fontSize: 16 }} />}
                    ghost={true}
                    onClick={() => onClose(true)}
                />
            </>
        </div>
    );
}

export default Index;