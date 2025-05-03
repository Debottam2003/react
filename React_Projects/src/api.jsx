import React from 'react'
import { useState } from 'react'
function Api() {
    const [data,setdata] = useState('api data is coming');
    async function apidata(){
        let response = await fetch('https://cat-fact.herokuapp.com/facts');
        let fetchdata = await response.json();
        let index = Math.floor(Math.random() * 5); 
        console.log(fetchdata[index].text);
        setdata(fetchdata[index].text);
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={apidata}>get data</button>
    </div>
  );
}
export default Api