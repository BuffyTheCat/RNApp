const addTodo = (text) => {
    return {
        type: 'ADD_TODOS',
        payload: text
    }
}

export {
    addTodo
}