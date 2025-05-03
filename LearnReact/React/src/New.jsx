import React from 'react'
let img_arr = [
  "https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/27372390/pexels-photo-27372390/free-photo-of-a-photo-of-a-mountain-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://fastly.picsum.photos/id/76/700/500.jpg?hmac=7-9P49HAqSxytmjD5GaBeoTPCMZrPWqdEsk67ws6xgg",
  "https://fastly.picsum.photos/id/106/700/500.jpg?hmac=M19iwsBse0jYW2FqEvYdpwHjD2NKE3XGgTBXknajoZw",
];
function New() {
  // let [image, setImage] = React.useState(img_arr[0]);
  let [index, setIndex] = React.useState(0);
  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % img_arr.length);
    // setImage(img_arr[index]);
    // if (index < img_arr.length - 1) {
    //   setImage(img_arr[index + 1]);
    //   setIndex(index + 1);
    // } else {
    //   setIndex(0);
    //   setImage(img_arr[0]);
    // }
  }
  function prev() {
    setIndex((prevIndex) => (prevIndex === 0 ? img_arr.length - 1 : prevIndex - 1));
    // setImage(img_arr[index]);
    // if (index > 0) {
    //   setImage(img_arr[index - 1]);
    //   setIndex(index - 1);
    // } else {
    //   setIndex(img_arr.length - 1);
    //   setImage(img_arr[img_arr.length - 1]);
    // }
  }
  return (
    <>
    <div><img src={img_arr[index]} ></img></div>
    <button onClick={prev}>Prev</button>
    <button onClick={next}>Next</button>
    </>
  )
}

export default New