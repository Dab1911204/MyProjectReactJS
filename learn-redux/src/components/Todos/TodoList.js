import { useSelector,useDispatch } from "react-redux";
import { completedTodos,undoTodos,deleteTodos } from "../../actions/todos";
import "./Todo.css"
function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todosReducer)
    console.log(todoList);
    const handleCompleted = (id) => {
        dispatch(completedTodos(id));
    }
    const handleUndo = (id) => {
        dispatch(undoTodos(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteTodos(id));
    }
    return (
        <>
            {todoList && (
                <ul className="todo__list">
                    {todoList.map((item) => (
                        <li className="todo__item" key={item.id}>
                            <span className={ "todo__content "+(item.completed && "todo__content--completed")}>
                                {item.content}
                            </span>
                            {item.completed ? (
                                <button onClick={() => handleUndo(item.id)}>U</button>
                            ) : (
                                <button onClick={() => handleCompleted(item.id)}>V</button>
                            )}
                            <button onClick={() => handleDelete(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default TodoList;