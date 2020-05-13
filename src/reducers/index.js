const initionaState = {
    todos: [
        {
            text: 'asd',
            finished: false,
            id: 0
        },
        {
            text: 'asdasd',
            finished: false,
            id: 1
        }
    ],
    loading: true,
    error: null,
};

const reducer = (state = initionaState, action) => {
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

        default:
            return state;
    }
}

export default reducer;