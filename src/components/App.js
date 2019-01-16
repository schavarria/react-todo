import React, { Component } from 'react'
import { Provider } from 'react-redux'


import store from '../store'
import FormComponent from './FormComponent'
import ListComponent from './ListComponent'
import FilterComponent from './FilterComponent'


class App extends Component {


  render() {
    return (
      <Provider store={store}>
       
          <div>
            <FormComponent/>
            <ListComponent/>
            <FilterComponent/>
          </div>
        
      </Provider>
    );
  }
}

export default App
