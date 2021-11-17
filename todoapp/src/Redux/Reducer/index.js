const initialState = {
    todos: [],
    filteredTodos: [],
    filter: 'SHOW_ALL',
    details: {},
    update: false,
};

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TODO':
            console.log(action.payload, 'add todo');
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case 'GET_TODOS':
            console.log( 'get todos');
            return {
                ...state
            };

        case 'TOGGLE_TODO': 
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done,
                        };
                    }
                })
            };

        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };

        case 'FILTER_TODO':
            return {
                ...state,
                filteredTodos: state.todos.filter(todo => {
                    switch (state.filter) {
                        case 'SHOW_ALL':
                            return true;
                        case 'SHOW_ACTIVE':
                            return !todo.done;
                        case 'SHOW_COMPLETED':
                            return todo.done;
                    }
                })
            };
        
        case 'DELETE_TODO':
            console.log(action.payload, 'delete todo');

            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                filteredTodos: state.filteredTodos.filter(todo => todo.id !== action.payload),
            };

        case 'SET_DETAILS':
            return {
                ...state,
                details: action.payload,
            };

        case 'TOGGLE_UPDATE':
            console.log('||||||||||||REDUCER1||||||||||||||||||||', 'toggle update');
            return {
                ...state,
                update: !state.update
            };

        default:
            return state;
    }
}