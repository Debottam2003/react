import { useState } from "react";

//custom hook for theme manage

const Theme = ()=>{
    let [theme, setTheme] = useState("white");
    let [color, setColor] = useState("white");
    let themeToggle = function(){
        if(theme === "white"){
            setColor("black");
            setTheme("black");
        }
        else if(theme === "black"){
            setColor("white");
            setTheme("white");
        }
    }
     return {color, themeToggle};
}

export default Theme;