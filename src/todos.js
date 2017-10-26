import React, { Component } from 'react';
import './todo.css'
  class TodoList extends Component {
    constructor(props){
      super(props)

      this.state={
        underline: true
      }
    }
    
    removeItem(item, i) {
      this.props.removeTodo(item, i);
  }

  underline(){
    this.setState({
      underline: false
    })
  }

  

    render() {
      return (
        <div>
          <ul>
                  { this.props.todos.map((todo,i) => {
                      return <div  key={i}>{ todo }<div onClick={()=>this.props.completeTask()}>completed</div><button onClick={() => { this.removeItem(todo, i)}}>X</button></div>
                    
                  })}
                  
              </ul>
        </div>
      );
    }
  }
  
  export default TodoList;

  