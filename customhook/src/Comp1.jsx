import { useState } from "react";
import CustomHook from "./CustomHook";

function Comp1() {
  let [_, color, Handler] = CustomHook();
  let [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count - 1);
        Handler();
      }}
      style={{ backgroundColor: color }}
    >
      Click {count}
    </button>
  );
}

export default Comp1;
