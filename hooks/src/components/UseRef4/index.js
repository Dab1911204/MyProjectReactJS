import { useState, useRef, useEffect } from 'react';
function UseRef4(){
    const [inputValue, setInputValue] = useState("");
    //const [counter,setCounter] = useState(0);
    const counterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);
    
    const handelChange = (e) => {
        setInputValue(e.target.value);
        counterRef.current++;
        //setCounter(counter+1);
    }
    console.log(counterRef.current);

    return (
        <>
            <input ref={inputRef} value={inputValue} onClick={handelChange}/>
        </>
    )
}

export default UseRef4;