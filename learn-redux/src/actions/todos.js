export const createTodos = (content) => {
    return {
        type: 'CREATE_TODO',
        content: content
    }
}

export const completedTodos = (id) => {
    return {
        type: 'COMPLETED_TODO',
        id: id
    }
}

export const undoTodos = (id) => {
    return {
        type: 'UNDO_TODO',
        id: id
    }
}
export const deleteTodos = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}
