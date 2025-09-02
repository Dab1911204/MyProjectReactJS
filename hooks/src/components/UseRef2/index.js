import { useState, useRef } from 'react';
function UseRef2(){
    const [inputValue, setInputValue] = useState("");
    //const [counter,setCounter] = useState(0);
    const counterRef = useRef(0);
    console.log(counterRef.current);
    
    const handelChange = (e) => {
        setInputValue(e.target.value);
        counterRef.current++;
        //setCounter(counter+1);
    }
    console.log(counterRef.current);

    return (
        <>
            <input value={inputValue} onClick={handelChange}/>
        </>
    )
}

export default UseRef2;