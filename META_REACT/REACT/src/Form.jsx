import React, { useState } from "react";

function FormFill() {
  let [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  });
  function handleChange(event){
    let { name, value } = event.target;
      setFormdata((prevFormData)=>({...prevFormData, [name]: value}));
  }
  function handleSubmit(event){
     event.preventDefault();
     console.log(formdata);
     setFormdata({
      username: "",
      email: "",
      password: ""
     });
  }
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Form</h2>
      <form style={{maxWidth: "600px"}} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", maxWidth: "600px" }}>
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="UserName"
            value={formdata.username}
            onChange={handleChange}
            required
            style={{
              width: "90%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={handleChange}
            required
            style={{
              width: "90%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value= {formdata.password}
            onChange={handleChange}
            required
            style={{
              width: "90%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button type="submit" className="submit" id="submit_btn" style={{boxShadow: "2px 5px 5px black"}}>Submit</button>
      </form>
    </div>
  );
}

export default FormFill;
