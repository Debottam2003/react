import { useState } from "react";

function CustomHook() {
  let [data, setData] = useState(0);
  let [flag, setFlag] = useState(false);
  let [color, setColor] = useState("red");
  const Handler = () => {
    setData(data + 1);
    if (flag === true) {
      setColor("red");
      setFlag(false);
    } else {
      setColor("green");
      setFlag(true);
    }
  };
  return [data, color, Handler];
}

export default CustomHook;
