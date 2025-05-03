import React from 'react'
import { useEffect } from 'react'
function Api2() {

    useEffect(()=>{
             let btn = document.querySelector('button');
             btn.addEventListener('click',async ()=>{
                let response = await fetch('https://cat-fact.herokuapp.com/facts');
                let fetchdata = await response.json();
                let index = Math.floor(Math.random() * 5); 
                console.log(fetchdata[index].text);
            let datashow = document.querySelector('h1');
            datashow.innerText = fetchdata[index].text;
             });
    },[]);

  return (
    <div>
        <h1>api data is coming</h1>
        <button>get data</button>
    </div>
  );
}
export default Api2