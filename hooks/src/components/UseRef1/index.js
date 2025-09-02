import { useState, useRef } from 'react';
function UseRef1(){
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0)
    const counterObj = {
        counter: 0
    }
    const handelClick = () => {
        setCounter(counter + 1);
        counterRef.current = counterRef.current + 1;
        counterObj.counter = counterObj.counter + 1;
    }
    console.log("counter: "+counter);
    console.log("counterRef: "+counterRef.current);
    console.log("counterObj: "+counterObj.counter);
    return (
        <>
            <button onClick={handelClick}>Click</button>
        </>
    )
}

export default UseRef1;