import { useState } from "react";

function CustomHook() {
  let [flag, setFlag] = useState(false);
  let [color, setColor] = useState("red");
  
  function Handler() {
    if (flag) {
      setColor("red");
      setFlag(false);
    } else {
      setColor("green");
      setFlag(true);
    }
  }
  return { color, Handler };
}

export default CustomHook;
