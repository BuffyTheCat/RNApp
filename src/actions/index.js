const addTodo = (text) => {    
    return {
        type: 'ADD_TODOS',
        payload: text
    }
}

const removeTodo = (id) => {    
    return {
        type: 'REMOVE_TODOS',
        payload: id
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


const todosFinished = (id) => {
    return {
        type: 'TODO_FINISHED',
        payload: id
    }
}

const changeTodo = (text, id) => {
    return {
        type: 'TODO_CHANGED',
        payload: {
            id: id,
            text: text
        }
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
    removeTodo,
    todosFinished,
    fetchTodos,
    changeTodo
}