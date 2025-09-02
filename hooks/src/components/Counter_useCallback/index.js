import { useState,useCallback } from 'react';
import Box from '../Box_memo'
function Counter(){
    const [counter,setCounter] = useState(0)
    // const handleCounter = () => {
    //     setCounter(counter => counter + 1)
    // }
    const handleCounter = useCallback(() => {
        setCounter(counter => counter + 1)
    },[])
    const handleReset = () => {
        setCounter(0)
    }
    return (
        <>  
            <div>Kết quả: {counter}</div>
            <Box onCounter={handleCounter} onReset={handleReset} />
           
        </>
    )
}

export default Counter;