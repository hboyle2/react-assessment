import React, { Component } from 'react';
import TodoList from './todos'
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        todos: [], 
        text: '' ,
        completed: false
      };

      this.removeTodo = this.removeTodo.bind(this);
      this.completeTask = this.completeTask.bind(this);
  }

  addTodo(text) {
    var list = this.state.todos
    if(text.length > 0){
      list.push(text)
    } else( alert('please input something'))
   
    this.setState({
      todos: list,
      text:''
    })
  }

  removeTodo(name, i){
      let todos = this.state.todos.slice();
      todos.splice(i, 1);
      this.setState({
          todos
      });
  }

  completeTask(){
    console.log('its working')
    let bob = this.state.text.strike();
    this.setState({
      text: '', 
      completed: true
    })
  }

  updateValue(e) {
      this.setState({ text: e.target.value})
  }

  render() {
      return(
          <div>
              
                  <input
                      placeholder="Add Todo"
                      value={this.state.text}
                      onChange={(e) => {this.updateValue(e)}}
                  />
                  <button onClick = {() => this.addTodo(this.state.text)} >Add Todo</button>
             
              <TodoList todos={this.state.todos} removeTodo={this.removeTodo}
              completeTask={this.completeTask}/>
          </div>
      );
  }
}

export default App
