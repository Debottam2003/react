import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Conditional2() {
  function notification() {
    toast("Yo Yo Yo Debottam Kar");
  }
  const date = new Date();
  // let arr = useState(0);
  // let count = arr[0];
  // let setCount = arr[1];
  let [count, setCount] = useState(10);
  let [clock, setClock] = useState(date.toLocaleTimeString());

  function set() {
    setClock(new Date().toLocaleTimeString());
  }

  async function increase() {
    function countdown() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setCount((prevdata) => prevdata - 1);
          resolve("success");
        }, 1000);
      });
    }
    for (let i = 1; i <= 10; i++) {
      await countdown();
    }
  }
  let img_arr = [
    "https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/27372390/pexels-photo-27372390/free-photo-of-a-photo-of-a-mountain-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://fastly.picsum.photos/id/76/700/500.jpg?hmac=7-9P49HAqSxytmjD5GaBeoTPCMZrPWqdEsk67ws6xgg",
    "https://fastly.picsum.photos/id/106/700/500.jpg?hmac=M19iwsBse0jYW2FqEvYdpwHjD2NKE3XGgTBXknajoZw",
  ];
  let [image_index, setImageIndex] = useState(0);
  function next() {
    setImageIndex((prevImageIndex) => (prevImageIndex + 1) % img_arr.length);
  }
  function prev() {
    setImageIndex((prevImageIndex) =>
      prevImageIndex === 0 ? img_arr.length - 1 : prevImageIndex - 1
    );
  }
  useEffect(() => {
    setInterval(next, 5000);
    setInterval(set, 1000);
  }, []);
  return (
    // <div style={{color: "lightgreen"}}>This is a Conditional Rendering page 2🟢</div>
    <>
      <Helmet>
        <title>This is the home page</title>
      </Helmet>
      <div style={{ color: "lightgreen" }}>
        This is the home page 🏠 {date.toLocaleDateString()}
      </div>
      <h2>{count}</h2>
      <button onClick={increase}>➕</button>
      <h1>{clock}</h1>
      <button onClick={notification}>Notification</button>
      <ToastContainer />
      <div
        style={{
          width: "500px",
          height: "400px",
          backgroundImage: `url(${img_arr[image_index]})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={prev}
          style={{
            backgroundColor: "aliceblue",
            color: "black",
            opacity: "0.5",
            borderRadius: "60%",
          }}
        >
          Prev
        </button>
        <button
          onClick={next}
          style={{
            backgroundColor: "aliceblue",
            color: "black",
            opacity: "0.5",
            borderRadius: "50%",
          }}
        >
          Next
        </button>
      </div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <br />
      {img_arr.map((url, index) => {
        return (
          <img
            src={url}
            key={index}
            alt="slider_image"
            style={{ display: image_index === index ? "block" : "none" }}
          />
        );
      })}
    </>
  );
}
// import React, { useRef } from 'react';

// const Conditional2 = () => {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.value = "debottam";
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

export default Conditional2;
