import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterTodos, clearCompleted } from '../actions/todoActions'



class Filters extends Component {
    
    all = () => {
        filterTodos('all')
    }

    active = () => {
        filterTodos('active')
    }

    complete = () => {
        filterTodos('complete')
    }

    clear = () => {
        clearCompleted()
    }





    render() { 
        return ( 
            <div>
                <p>{this.props.count} Items Left: </p>
                <button onClick={this.all}>All</button>
                <button onClick={this.active}>Active</button>
                <button onClick={this.complete}>Complete</button>
                <button onClick={this.clear}>Clear Completed</button>
            </div>
         )
    }
}

function mapStateToProps(appState){
    return{
        count: appState.todos.filter(item => item.active).length
    }
}

export default connect(mapStateToProps) (Filters)