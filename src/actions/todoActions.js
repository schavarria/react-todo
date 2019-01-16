import store from '../store'
import shortid from 'shortid'

export function addTodo(todo){
    console.log('todo', todo)
    store.dispatch({
        type:'ADD_TODO',
        payload:{
            id:shortid.generate(),
            text: todo,
            active: true
        }
    })
}

export function deleteTodo(id){
    store.dispatch({
        type:'DELETE_TODO',
        id:id
    })
}

export function toggleStatus(id){
    store.dispatch ({
        type:'TOGGLE_STATUS',
        id:id
    })
}

export function filterTodos(filter){
    store.dispatch({
        type:'FILTER',
        filter: filter
    })
}

export function clearCompleted(){
    store.dispatch({
        type: 'CLEAR_COMPLETED'
    })
}