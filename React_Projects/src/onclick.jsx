import React,{useState} from "react";

export default function  Click(){
    let [text,settext] = useState("");
       function textchange(event){
             settext(event.target.value);
       }
       return(
        <>
        <form>
            <input onChange={(e)=> textchange(e)}></input>
            <h1>name: {text}</h1>
        </form>
        </>
       )
}