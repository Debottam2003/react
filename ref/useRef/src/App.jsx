import { useRef } from "react";

function App() {
  const buttonRef = useRef();
  const textRefs = useRef([]);

  const handleClick = () => {
    textRefs.current.forEach((textRef) => {
      if (textRef) {
      textRef.innerHTML = "hello";
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.color = "white";
      console.log(buttonRef.current);
      console.log(textRef);
      }
    });
  };

  return (
    <>
      <div style={{ width: "500px", height: "500px", backgroundColor: "#212121" }}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              style={{ color: "white", marginBottom: "10px" }}
            >
              Div {index + 1}
            </div>
          ))}
        <button
          style={{ padding: "1rem", fontFamily: "cursive" }}
          // ref={buttonRef}
          ref={(el) => (buttonRef.current = el)}
          onClick={handleClick}
        >
          Change Text
        </button>
      </div>
    </>
  );
}

export default App;
