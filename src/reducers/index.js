const initionState = {
    todos: [],
    loading: true,
    error: null,
};

const reducer = (state = initionState, action) => {
    console.log('im here');
    
    console.log(action.type);
    
    switch (action.type) {
        case 'ADD_TODOS':
            const textTodo = action.payload;
            const idTodos = state.todos.length;
            const newTodo = {
                text: textTodo,
                finished: false,
                id: idTodos
            }
            return {
                ...state,
                todos: [
                    ...state.todos,
                    newTodo
                ]
            }
        case 'REMOVE_TODOS':
            const itemId = action.payload;
            const itemIndex = state.todos.findIndex(({itemId}) => id === itemId);
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, itemId),
                    ...state.todos.slice(itemId + 1)
                ]
            }

        case 'TODO_REQUESTED':
            return {
                ...state,
                loading: true
            }

        case 'TODO_LOADED':
            return {
                ...state,
                loading: false,
                todos: [
                    ...action.payload
                ]
            }

        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;