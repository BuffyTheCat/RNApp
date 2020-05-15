const addTodo = (text) => {    
    return {
        type: 'ADD_TODOS',
        payload: text
    }
}

const todoRequested = () => {
    return {
        type: 'TODO_REQUESTED'
    }
}

const todosLoaded = (data) => {
    return {
        type: 'TODO_LOADED',
        payload: data
    }
}

const todosError = (error) => {
    return {
        type: 'FETCH_FAILURE',
        payload: error
    }
}

const fetchTodos = (storeService, dispatch) => () => {
    dispatch(todoRequested());
    storeService.getTodos()
        .then((data) => dispatch(todosLoaded(data)))
        .catch(err => dispatch(todosError(err)));
}

export {
    addTodo,
    fetchTodos
}