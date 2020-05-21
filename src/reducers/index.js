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

        case 'TODO_FINISHED':
            const todo = action.payload;
            const todoIndex = state.todos.findIndex(({id}) => id === todo);
            
            const fidishedTodo = {
                ...state.todos[todoIndex],
                finished: !state.todos[todoIndex].finished
            }

            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, todoIndex),
                    fidishedTodo,
                    ...state.todos.slice(todoIndex + 1)
                ]
            }

        case 'REMOVE_TODOS':
            const itemId = action.payload;
            const itemIndex = state.todos.findIndex(({id}) => id === itemId);
            const newArray = [
                ...state.todos.slice(0, itemIndex),
                ...state.todos.slice(itemIndex + 1)
            ].map((item, index) => ({ ...item, id: index }));
            return {
                ...state,
                todos: newArray
            }

        case 'TODO_REQUESTED':
            return {
                ...state,
                loading: true
            }

        case 'TODO_CHANGED':
            
            const changedId = action.payload.id;
            const changedText = action.payload.text;
            const changedIndex = state.todos.findIndex(({id}) => id === changedId);
            
            const changedTodo = {
                ...state.todos[changedIndex],
                text: changedText
            }
            
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, changedIndex),
                    changedTodo,
                    ...state.todos.slice(changedIndex + 1)
                ]
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