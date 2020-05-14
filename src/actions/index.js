const addTodo = (text) => (dispatch, store) => {
    return {
        type: 'ADD_TODOS',
        payload: text
    }
}

export {
    addTodo
}