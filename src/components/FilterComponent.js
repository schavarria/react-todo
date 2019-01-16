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
            <div className="filterCon">
                <p>{this.props.count} Items Left </p>
                <button className="filterButton" onClick={this.all}>All</button>
                <button className="filterButton" onClick={this.active}>Active</button>
                <button className="filterButton" onClick={this.complete}>Complete</button>
                <button className="filterButton" onClick={this.clear}>Clear Completed</button>
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