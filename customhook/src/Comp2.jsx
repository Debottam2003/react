function Comp2({ data, color, handler }) {
  return (
    <button
      onClick={() => {
        handler();
      }}
      style={{ backgroundColor: color }}
    >
      Click {data}
    </button>
  );
}

export default Comp2;
