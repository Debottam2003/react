import { useState } from "react";
import "./App.css";
import {useForm} from 'react-hook-form';
function App() {
  let { register, handleSubmit, reset, getValues } = useForm();
  let [name, setname] = useState("");
  function submitForm(data) {
    console.log(data);
    // reset();
  }
  function show(e){
    console.log(e.target);
    // console.log(getValues("username"));
    console.log(name);
  }
  function setvalue(e){
    setname(e.target.value);
  }
  return (
    <>
      <h1>This is a form</h1>
      <h2>I am learning useForm hook</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="username" >Username:</label>
          <input type="text" id="username" onChange={setvalue} value={name} />
        </div>
        <div>
          <label htmlFor="password" >Password:</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button type="submit" onClick={(e)=>show(e)}>Login</button>
      </form>
    </>
  );
}
export default App;
