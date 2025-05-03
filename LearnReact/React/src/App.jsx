import { useState, useEffect } from "react";
import "./App.css";
import {Header, name} from "./Header.jsx";

function Custom(){
  return <h1>This is a custom text</h1>
}

function App() {
  const [image, setImages] = useState([]);
  let date = new Date();
  let list = [];
  for(let i = 0; i < 10; i++){
    list.push(<h1 style={{color: "blue"}} key={i}>Debottam is the best</h1>);
  }
  useEffect(() => {
    async function fetchImages() {
      const newImages = [];
      for (let i = 0; i < 10; i++) {
        try {
          const response = await fetch("https://picsum.photos/600/500");
          newImages.push(response.url);
        } catch (err) {
          console.error("Error fetching image:", err);
        }
      }
      setImages((previmages)=>([...previmages, ...newImages])); // Update state only once
    }

    fetchImages();
  }, []);
  let style_obj = {
    border: "2px solid blue",
  };
  style_obj.border = "1px solid blue";

  async function getimage() {
    try {
      let data = await fetch("https://picsum.photos/600/500");
      //console.log(data.url);
      setImages((previmage) => [...previmage, data.url]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Custom></Custom>
    <Header />
    {Custom()}
    {list}
    <Custom />
      <button
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          background: "darkblue",
        }}
        onClick={getimage}
      >
        Get Image {date.toLocaleDateString()}
      </button>
      {image.map((element, index) => {
        return <img src={element} key={index} style={style_obj}></img>;
      })}
    </>
  );
}

export default App;
