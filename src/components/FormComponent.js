import React, { Component } from 'react'
import { addTodo } from '../actions/todoActions'

class FormComponent extends Component{
    state= {
        todo:''
    }

handleChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value
    })
}

handleSubmit =(e) => {
    e.preventDefault()
    addTodo(this.state.todo)
    this.setState({
        todo:''
    })
}


    render(){
        return (
            <div>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="todo"
                        onChange={this.handleChange}
                        placeholder="Enter A Todo"
                        value={this.state.todo}
                     />
                </form>
            </div>
        )
    }
} 

export default FormComponent