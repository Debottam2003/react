import { useEffect, useState } from "react";

function App() {
  const images = [];
  for (let i = 1; i <= 22; i++) {
    images.push(`/images/image${i}.jpeg`);
  }

  const [SystemDate, setDate] = useState(new Date().toLocaleTimeString());
  const [backgroundImage, setBackgroundImage] = useState(
    `url(${images[images.length - 1]})`
  );
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(3);
  const [arr, setArr] = useState(images.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString()); // Updates state every second
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const setImages = setInterval(() => {
      setPrevIndex((prev) => (prev + 1) % images.length);
      setNextIndex((next) => (next + 1) % images.length);
      setBackgroundImage(`url(${images[prevIndex]})`);
      setArr((prevSlider) => {
        const newSlider = [...prevSlider.slice(1), images[nextIndex]];
        return newSlider;
      });
    }, 3000);
    return () => clearInterval(setImages);
  }, [prevIndex, nextIndex]); // Added dependencies

  return (
    <>
      <div className="hero" style={{ backgroundImage }}>
        <div className="text">This is the new Debottam...</div>
        <div className="slider">
          {arr.map((image, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className="slider-image"
            ></div>
          ))}
        </div>
      </div>
      <footer>@Debottam Kar {SystemDate}</footer>
    </>
  );
}

export default App;
