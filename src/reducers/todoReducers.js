const initialState = {
    todos: [],
    filter: 'all'
}

export default function(state = initialState, action) {
    switch (action.type){
        case 'ADD_TODO':
            return {...state, todos:[action.payload,...state.todos]}
        case 'DELETE_TODO':
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case 'TOGGLE_STATUS':
            return {...state, todos: state.todos.map(todo => {
                if (todo.id === action.id){
                  todo.active = !todo.active   
                }
                return todo
            })}
        case 'CLEAR_COMPLETED':
            return { ...state, todos:state.todos.filter(todo => todo.active)}
        case 'FILTER':
            return {...state, filter: action.filter}
        default:
            return state
    }
}