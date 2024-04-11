import React, { useState, useEffect } from 'react';
import { UIState } from "../../../../utils/globalState";
import { i18n } from "../../../../i18n";

function Index(props) {
    const setTimer = UIState((state) => state.setTimer);
    const timer = UIState((state) => state.timer);
    // const time = TimeState((state)=>state.time);
    // const date = TimeState((state)=>state.date);
    // const {real_time_date, real_time_time, real_time_wish} = useDate(); 
    // realtime
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000); // update date every 30 seconds
    }, []);


    return (
        <div onClick={() => setTimer(timer)} style={{ display: 'inline' }}>
            <div style={{ display: 'inline' }}>
                <div style={{ backgroundColor: "rgba(255,0,0,0)", height: "26.5%", width: "100%" }}></div>
                <div style={{ lineHeight: "100%", height: "60%", width: "100%" }}>
                    <span style={{ display: "block", fontSize: "2.3rem", fontWeight: 900, lineHeight: "100%" }}>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                        })}
                    </span>
                    <span style={{ display: "block", fontSize: '0.94rem', lineHeight: "100%", marginTop: "0.3vh" }}>
                        {i18n.language === "zh" ? dateState.toLocaleString('zh-ZH', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            weekday: 'short',
                        })
                            : dateState.toLocaleString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                weekday: 'short'
                            })
                        }
                    </span>
                </div>
                <div style={{ backgroundColor: "rgba(255,0,0,0)", height: "13.5%", width: "100%" }}></div>
            </div>
        </div>
    );
}

export default Index;