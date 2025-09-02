import { useEffect, useReducer,useRef } from "react";

const init = [
    {
        id:1,
        content:"Thứ 2 học HTML"
    },
    {
        id:2,
        content:"Thứ 3 học CSS"
    },
    {
        id:3,
        content:"Thứ 4 học JS"
    },
]

const reducer = (state, action) => {
    console.log(state,action)
    switch (action.type) {
        case "CREATE":
            return [
                ...state,
                {
                    id:state.length + 1,
                    content:action.value
                }
            ]
        case "DELETE":
            return state.filter(todo => todo.id !== action.id)
        default:
            break;
    }
    return state
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, init)
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleAddTodo = (e) => {
        e.preventDefault()
        const value = e.target.elements.inputTodo.value
        if (value){
            dispatch({
                type: "CREATE",
                value:value 
            })
            inputRef.current.value = ""
        }
    }
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE",
            id:id
        })
    }
    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input ref={inputRef} type="text" name="inputTodo" />
                <button>Add</button>
            </form>
            {todos.length > 0 && (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.content}
                            <button onClick={()=>handleDelete(todo.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )

}

export default Todos;