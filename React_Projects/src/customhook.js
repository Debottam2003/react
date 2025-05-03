import {useState} from 'react';
export default function useCustom(){
    const [counter,setcounter] = useState('red');
    let [flag, setFlag] = useState(0);
    // const increment = ()=> (setcounter((prevcounter) => (prevcounter + 1)));
    // const decrement = ()=> (setcounter((prevcounter) => (prevcounter - 1)));
    // const reset = ()=> (setcounter((prevcounter) => 0));
    let statechange = ()=>{
    if(flag === 0){
       setcounter("green");
       setFlag(1);
    }
    else if(flag === 1){
        setcounter("red");
        setFlag(0);
    }
};

    return { counter,statechange};

}


