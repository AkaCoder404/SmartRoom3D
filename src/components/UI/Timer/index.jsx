import React from 'react';
import {Calendar} from "antd";
// import {TimePicker} from "antd";
// import moment from 'moment';
import { useState } from 'react';
// import {UIState, TimeState} from "../../../utils/globalState";
import {TimeState} from "../../../utils/globalState";


function Index(props) {
    // const setTime = TimeState((state)=>state.setTime);
    const setDate = TimeState((state)=>state.setDate);
    // const time = TimeState((state) => state.time);
    const date = TimeState((state) => state.date);

    const onPanelChange = (_value, _mode) => {
        // console.log(_value, _mode);
        console.log("calendar onPanelChange");
        setValue(_value);
    };

    const [value, setValue] = useState(date);
    // eslint-disable-next-line
    const [selectedValue, setSelectedValue] = useState(date);

    // calendar onSelect
    const onSelect = (_value) => {
        console.log("calendar onSelect", _value, selectedValue); 
        setValue(_value);
        setSelectedValue(_value);
        setDate(_value);
    };
    // timepicker
    // const [pvalue, psetValue] = useState(time);
    // const onChange = (time, timeString) => {
    //     // console.log(Date().toLocaleString());
    //     console.log(time, timeString);
    //     if (time != null) {
    //         psetValue(time);
    //         setTime(time);
    //     } 
    // };

    return (
        <div style={{
            position:'absolute',
            backgroundColor:'rgba(253,251,249,0.6)',
            left:"11%",
            width:"89vw",
            // height:"83.5vh",
            height:"95vh",
            // top:"16.5%",
            // width: "95vw",
            // height: "87vh",
            top: "8%",
            zIndex:20,
            backdropFilter:'blur(10px)'
        
        }}>
        <div style={{
            position:"absolute",
            backgroundColor:'white',
            boxShadow:"0px 4px 4px rgba(0,0,0,0.25)",
            width:'21.2vw',
            // height:'36.6vh',
            left:'28.5vw',
            top:'3vh',
            zIndex:30,
            borderRadius:8,

            // height without timepicker
            height:'32.6vh',
        }}>
            <div  style={{marginTop:10}}>
            {/* <TimePicker 
                value={pvalue}
                // defaultOpenValue={moment('20:06:00', 'HH:mm:ss')}
                onChange={onChange}
            /> */}
            
            <Calendar 
                fullscreen={false}  
                value={value} 
                onSelect={onSelect}
                onPanelChange={onPanelChange} 
            />
            </div>
        </div>
        </div>
    );
}

export default Index;