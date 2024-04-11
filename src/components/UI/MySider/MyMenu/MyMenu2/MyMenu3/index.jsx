import React/*,{useEffect, useState} */ from 'react';
// import QueueAnim from "rc-queue-anim";
// import Background from "../../../../../../assets/images/svg/地板.svg";
// import Man from "../../../../../../assets/images/svg/男青年.svg"
// import Women from "../../../../../../assets/images/svg/女青年.svg";

function Index(props) {

    return (
        <>
        <div style={{
            width:1,
            height:"100vh",
            overflow: 'auto',
            position: 'fixed',
            backgroundColor:"rgba(0,0,0,0.2)",
            zIndex:20,
            left: "0%",
            top: "20%"
        }} key = "demo1"> 
        </div>
        
        <div style={{
            position:"absolute",
            zIndex:10,
            borderRadius:20,
            boxShadow:"0px 4px 4px rgba(0,0,0,0.25)",
            background: '#FEF0E6',
            // backgroundColor: "orange",
            width:"100%",
            left:"4%",
            height:"100%"
    
        }}
        >

            {/*<div style={{height:"57%",width:"90%",position:"absolute",left:"5%",top:"10%",*/}
            {/*    backgroundImage: `url(${Background}`,backgroundRepeat:"no-repeat",*/}
            {/*    backgroundSize:"100%"}}></div>*/}
            {/*<div style={{height:"57%",width:"6%",position:"absolute",left:"70%",top:"15%",*/}
            {/*    backgroundImage: `url(${Man}`,backgroundRepeat:"no-repeat",*/}
            {/*    backgroundSize:"100%"}}></div>*/}
            {/*<div style={{height:"57%",width:"3.5%",position:"absolute",left:"20%",top:"15%",*/}
            {/*    backgroundImage: `url(${Women}`,backgroundRepeat:"no-repeat",*/}
            {/*    backgroundSize:"100%"}}></div>*/}
        </div>
        </>
    );
}

export default Index;