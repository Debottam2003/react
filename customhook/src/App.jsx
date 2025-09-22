import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import CustomHook from "./CustomHook";

function App() {
  let [data1, color, Handler1] = CustomHook();
  return (
    <div>
      <button
        onClick={() => {
          Handler1();
        }}
        style={{ backgroundColor: color }}
      >
        Click {data1}
      </button>
      <Comp1></Comp1>
      <Comp2 data={data1} color={color} handler={Handler1}></Comp2>
    </div>
  );
}

export default App;
