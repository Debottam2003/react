import React, { useState, useEffect } from "react";
import Theme from "./theme";

function Todo() {

  const {color, themeToggle} = Theme();

  let [data, setData] = useState([]); //data array
  let [todo_value, setTodovalue] = useState(""); //each todo data at writing time

  let [edit_todo, setEditTodo] = useState(""); //edit todo data at writing time

  let [dataHideId, setDataHideId] = useState(-1); //id of the data to hide at editing time
  let [editHideId, setEditHide] = useState(-1); //id of the text field to show after edit button is pressed

  useEffect(() => {
    //Load data from localStorage
    let arr = JSON.parse(localStorage.getItem("arr"));
    if (!arr) {
      setData([]);
    } else {
      setData(arr); //sets the data array just fetched from local storage
    }
  }, []);

  function remove(index) {
    //removes the todo form data array from the index passed in the remove function
    const newData = data.filter((_, i) => i !== index);
    setData(newData); //sets the data array
    localStorage.setItem("arr", JSON.stringify(newData));
  }

  function change(event) {
    setEditTodo(event.target.value); //sets the edit todo data
  }

  function newsubmit(index, event) {
    event.preventDefault(); //prevent default form submission and refresh of the page
    const value = edit_todo; //takes the edit todo data
    if (value.trim() === "") return; // Prevent adding empty todos
    data[index] = value; //replaces the new todo data in the data array in the given index position
    const newData = data;
    setData(newData);
    setEditHide(-1); //sets the edit form(input text field + save button) hidden again
    setDataHideId(-1); //sets the todo data vissible again
    localStorage.setItem("arr", JSON.stringify(newData));
    setTodovalue(""); //Clears the input field
  }

  function edit(index) {
    setEditTodo(data[index]); //sets the edit_todo text field with the passed index todo data
    setDataHideId(index); //hides the todo data of the given index only and the edit button too
    setEditHide(index); //shows the edit form(edit_todo textfield + save button) of the given index only
  }

  function add(event) {
    event.preventDefault(); //prevent default form submission and refresh of the page
    const value = todo_value;
    if (value.trim() === "") return; //Prevents adding empty todos

    const newData = [...data, value]; //sets the new added todo data the data array using the spread operator
    setData(newData); //sets the data array
    localStorage.setItem("arr", JSON.stringify(newData));
    setTodovalue(""); //Clears the input field
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: color,
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.46)",
        borderRadius: "5px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: color === "white" ? "black" : "white"
        }}
      >
        Todo list<button style={{backgroundColor: color,
                                border: "none",
                                fontSize: "1.3rem"}}
                                onClick={themeToggle}
                  >🌙</button>
      </h1>
      <form
        onSubmit={add}
        style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
      >
        <input
          type="text"
          name="todo"
          placeholder="Write Here"
          value={todo_value}
          onChange={(e) => setTodovalue(e.target.value)} // Ensure state is updated
          required
          style={{
            flex: "1",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
            outline :"none"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#28a745",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.91)",
          }}
        >
          Add➕
        </button>
      </form>
      {data.map((element, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "4px",
              boxShadow: "inset 2px 3px 5px rgba(144, 142, 142, 0.91)",
              backgroundColor: "#efefef"
            }}
          >
            <h2
              style={{
                flex: "1",
                margin: "0",
                fontSize: "18px",
                display: index !== dataHideId ? "block" : "none",
              }}
            >
              {index + 1}. {element}
            </h2>
            <form
              style={{
                width: "85%",
                display: index === editHideId ? "flex" : "none",
              }}
              onSubmit={(event) => newsubmit(index, event)}
            >
              <input
                type="text"
                name="edit_todo"
                value={edit_todo}
                onChange={change}
                required
                style={{
                  display: "flex",
                  margin: "auto",
                  fontFamily: "Arial",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  alignItems: "center",
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  width: "60%",
                }}
              />
              <button
                type="submit"
                style={{
                  margin: "auto",
                  display: "flex",
                  padding: "5px 10px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.91)",
                }}
              >
                Save
              </button>
            </form>
            <button
              style={{
                display: index !== dataHideId ? "block" : "none",
                padding: "5px 10px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "orange",
                margin: "5px",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.91)",
              }}
              onClick={() => {
                edit(index);
              }}
            >
              Edit✏️
            </button>
            <button
              onClick={() => remove(index)}
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#dc3545",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.91)",
              }}
            >
              Delete🗑️
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
