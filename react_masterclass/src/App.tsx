// import { useState } from "react";
// import axios from "axios";

// function App() {
//   let [username, setName] = useState("");
//   let [password, setPassword] = useState("");
//   let submitHandler = async (e: any) => {
//     e.preventDefault();
//     console.log(username, password);
//     if (password.length < 3) {
//       return alert("this can not be a password");
//     }
//     let userInfo = { username, password };
//     let response = await axios.post("http://localhost:5173/login", userInfo);
//     console.log(response.data.message);
//     setName("");
//     setPassword("");
//   };
//   return (
//     <>
//       <h1>Hello from react</h1>
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={username}
//           placeholder="Enter username"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={password}
//           placeholder="Enter password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

import axios from "axios";
import { useForm } from "react-hook-form";
import Data from "./Data";

type user = {
  name: string;
  password: string;
};

function App() {
  let { register, handleSubmit, reset } = useForm<user>();
  let submitHandler = async (data: user) => {
    // console.log();
    if (data.password.length < 3) {
      return alert("this can not be a password");
    }
    let response = await axios.post("http://localhost:5173/login", data);
    console.log(response.data.message);
    reset();
  };
  return (
    <>
      <Data></Data>
      <h1>Hello from react</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" {...register("name")} required id="name" />
        <input
          type="password"
          {...register("password")}
          required
          id="password"
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
