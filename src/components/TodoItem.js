import React, { Component } from 'react'
import { deleteTodo, toggleStatus } from '../actions/todoActions'
import '../style.css'

class TodoItem extends Component {

    deleteTodo = (e) => {
        deleteTodo(this.props.id)
    }
 
    changeStatus = (e) => {
        toggleStatus(this.props.id)
    }


    render() {
       return (
            <div className="listCon">
                <li className={this.props.active ? '' : 'complete'} onClick={this.changeStatus}>
                    {this.props.text}
                </li>
                <button className="deletebutton" onClick={this.deleteTodo}>X</button>
             </div>
       ) 
    }
}

export default TodoItem