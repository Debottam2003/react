import { useState } from "react";
import { useForm } from "react-hook-form";
import Gallery from "./Gallery";

function App() {
  let [gallery, setGallery] = useState([]);
  let { register, handleSubmit, reset } = useForm();
  function set(data) {
    console.log(data.url);
    setGallery([...gallery, data.url]);
    reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit(set)}>
        <input type="text" placeholder="Enter image URL" name="url" {...register("url")} required />
        <button type="submit">Add</button>
      </form>
      <Gallery gallery={gallery} />
    </>
  );
}

export default App;
