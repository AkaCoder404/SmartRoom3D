// 倒入组件
import React from 'react';
import {Layout} from 'antd';
// import {useRoutes,  useLocation, Link} from 'react-router-dom'
import {useRoutes, useLocation} from 'react-router-dom';

// 自定义组件
import MyHeader from "../MyHeader";
import routes from "../../../routes";

// 静态文件
import './index.css'
// import MyDrawer from "../MySider/MyDrawer";
import MySider from "../MySider";
import Reminder from "../Reminder";
import {UIState} from "../../../utils/globalState";
import Myself from "../Myself";
import Timer from "../Timer";
import Outline from "../Outline";


function MyLayout(){
    const element = useRoutes(routes)
    const location = useLocation()
    const reminder = UIState((state) => state.reminder)
    const myself = UIState((state) => state.myself)
    const timer = UIState((state) => state.timer)
    const outline = false ? UIState((state) => state.outline) : null

    return (
        <>
        <div style={{height:"7vh",backgroundColor:"#00f",width:document.documentElement.clientWidth}}></div>
        {/* <div style={{height:"7vh",backgroundColor:"#FDFBF9",width:document.documentElement.clientWidth}}></div> */}
        <Layout>
            <MySider/>
            <MyHeader location={location}
            ></MyHeader>
            {reminder?<Reminder/>:null}
            {myself?<Myself/>:null}
            {timer?<Timer/>:null}
            {outline ? <Outline/>:null}
            {element}
        </Layout>
        </>
    );
}

export default MyLayout;