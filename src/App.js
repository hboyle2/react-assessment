import React, { Component } from 'react';
import TodoList from './todos'
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        todos: [], 
        text: '' ,
        id: 0
        // underline: ''
      };

      this.removeTodo = this.removeTodo.bind(this);
    //   this.underline = this.underline.bind(this);
  }

  addTodo(text) {
    var list = this.state.todos
    if(text.length > 0){
      list.push(text)
    } else( alert('please input something'))
    var id = this.state.id
    this.setState({
      todos: list,
      text:'',
      id: id++
    //   underline: false
    })
    
  }

  removeTodo(name, i){
      let todos = this.state.todos.slice();
      todos.splice(i, 1);
      this.setState({
          todos
      });
  }



  updateValue(e) {
      this.setState({ text: e.target.value})
  }

//   underline(){
//     console.log(this.state.underline)
//     this.setState({
//       underline: true
//     })
//   } 

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
              underline={this.underline}/>
          </div>
      );
  }
}

export default App
