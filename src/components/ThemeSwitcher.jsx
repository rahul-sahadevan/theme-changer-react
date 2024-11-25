
import React, { useState } from "react";
import { flushSync } from "react-dom";


const ThemeSwitcher = ()=>{

    const [black,setBlack] = useState(false)
    const [theme,setTheme] = useState("white")
    console.log(theme)
    

    function handleSwitch(){
        if(black === true){
            localStorage.setItem("theme","black")
            setBlack(false)
        }
        else{
            localStorage.setItem("theme","white")
            setBlack(true)
        }
        setTheme(localStorage.getItem("theme"))
        
    }


    return (
        <div className={theme === "black" ? "black" : "white"}>
            <h3 className={theme === "black" ? "white-head" : "black-head"}>Hello World</h3>
            <button className={theme === "black" ? "white-btn" : "black-btn"} onClick={handleSwitch}>{black === true ? "switch white" : "switch black"}</button>
        </div>
    )
}

export default ThemeSwitcher