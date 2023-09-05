import React, { useEffect, useRef, useState } from 'react'

const DarkTheme = ({getTheme}) => {
    const reff = useRef()
    const sunRef=useRef()
    const moonRef=useRef()
    const [position, updatePosition] = useState("flex-start")
    function changePosition() {
        
        if (position === "flex-start") {
            
            reff.current.style.justifyContent = "flex-end";
            reff.current.style.backgroundColor = "#FF5400";
            moonRef.current.style.color="orange"
            sunRef.current.style.color="black"
            updatePosition("flex-end")
            // console.log(position)
            getTheme("dark")
        }
        else{
            
            reff.current.style.justifyContent = "flex-start";
            reff.current.style.backgroundColor = "#EBEEFE"
            sunRef.current.style.color="orange"
            moonRef.current.style.color="black"
            updatePosition("flex-start")
            getTheme("light")
            // console.log(position)
        }
    }
    useEffect(()=>{
        sunRef.current.style.color="orange"
    },[])
    return (
        <div className="dark-theme">
            <div className="buttons-box">
                <i class="fa-regular fa-sun icon" ref={sunRef}></i>
                <div className='toggle' onClick={changePosition} ref={reff}>
                    <div className="switch"></div>
                </div>
                <i class="fa-solid fa-moon icon" ref={moonRef}></i>
            </div>
        </div>
    )
}

export default DarkTheme;