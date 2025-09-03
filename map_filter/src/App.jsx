import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    let newNote = prompt("Enter new note.");
    if (newNote) {
      setNotes((prevdata) => [...prevdata, newNote]);
    }
  }

  function deleteHandler(index) {
    let newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  }

  return (
    <div className="app">
      <h1 className="title">📝 STICKY NOTE APP</h1>
      <button className="add-btn" onClick={addNote}>➕ Add Note</button>
      <div className="notes-container">
        {notes?.map((note, index) => (
          <div key={index} className="note">
            <h2>{note}</h2>
            <button
              className="delete-btn"
              onClick={() => deleteHandler(index)}
            >
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
