const initialState = {
    todos: [],
    filteredTodos: [],
    filter: 'SHOW_ALL',
    details: {},
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
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
                    switch (action.payload) {
                        case 'SHOW_ALL':
                            return true;
                        case 'SHOW_ACTIVE':
                            return !todo.done;
                        case 'SHOW_COMPLETED':
                            return todo.done;
                    }
                })
            };

        case 'SET_DETAILS':
            return {
                ...state,
                details: action.payload,
            };

        default:
            return state;
    }
}