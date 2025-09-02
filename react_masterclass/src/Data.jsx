import { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  let [capitalName, setCapitalName] = useState("");
  const getCapital = async () => {
    let country_name = prompt("Enter the country name");
    let response = await axios.get(
      `https://debottamapi.onrender.com/debottamapi/${country_name}`
    );
    // alert(response.data);
    setCapitalName(response.data);
  };
  useEffect(() => {
    const capital = async () => {
      let response = await axios.get(
        "https://debottamapi.onrender.com/debottamapi/china"
      );
      // alert(response.data);
      setCapitalName(response.data);
    };
    capital();
  }, []);
  return (
    <div>
      {capitalName}
      <button onClick={getCapital}>Get Capital</button>
    </div>
  );
}

export default Data;
