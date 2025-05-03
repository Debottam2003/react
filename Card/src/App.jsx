import { useEffect, useState } from "react";

function App() {
  let [card, setCard] = useState([{
    image: "https://images.pexels.com/photos/30159434/pexels-photo-30159434/free-photo-of-intricate-floral-patterns-at-sheikh-zayed-mosque.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    heading: "Debottam",
    text: "I am Debottam Kar, this is the new and best of him..."
  }]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000",{method: 'get', credentials: 'include'})
      .then((response) => response.json())
      .then((data) => {
        setCard((prevdata)=>([...prevdata, ...data]))
        console.log(data);
      });
  }, []);
  return (
    <>
    <div className="body">
      {card.map((element, index) => {
        return (
          <div key={index} className="card">
            <div className="card-border">
              <img src={element.image} />
              <h2>{element.heading}</h2>
              <h5>{element.text}</h5>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
