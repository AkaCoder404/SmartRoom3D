import React, {useEffect, useState} from 'react';
import Background from "../../../imgs/室内.png";

function Index(props) {
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener('resize',Resize)
        return ()=>{
            window.removeEventListener('resize',Resize)
        }
    },[])
    const Resize = ()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    return (
        <div style={{
            height:height,
            width:width,

        }}>
            <div style={{
                height:height*0.8,
                width:width,
                backgroundSize:width,
                backgroundImage: `url(${Background})`,
                backgroundRepeat:"no-repeat",
                position:"relative",
                top:"16vh",
                right:"5.5vh"
            }}></div>
        </div>
    )
}

export default Index;