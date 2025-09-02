import { useReducer } from 'react';

const reducer = (state, action) => {
    //Acction:Tẳng,giảm,Reset
    console.log(state,action);
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

function Counter() {
    const [counter, dispatch] = useReducer(reducer,0);

    return (
        <>
            <div>Kết quả: {counter}</div>
            <button onClick={()=>dispatch("UP")}>Tăng</button>
            <button onClick={()=>dispatch("DOWN")}>Giảm</button>
            <button onClick={()=>dispatch("RESET")}>Reset</button>
        </>
    )
    
}

export default Counter;