import {useSelector,useDispatch} from 'react-redux'
import {up,down,reset} from '../../actions/counter'

function Counter (){
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    return(
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={()=>dispatch(up(5))}>Tăng 5</button>
            <button onClick={()=>dispatch(down(3))}>Giảm 3</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}
export default Counter;