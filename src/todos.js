import React, { Component } from 'react';
import './todo.css'
  class TodoList extends Component {
    constructor(props){
      super(props)

      this.state={
        underline: false
      }
    }
    
    removeItem(item, i) {
      this.props.removeTodo(item, i);
      this.setState({
        underline:false
      })
  }

  // underline(){
  //   console.log('it works')
  //   this.setState({
  //     underline: true
  //   })
  //   // this.props.underline()
  // }

  

    render() {
     console.log(this.state.underline)
      return (
        <div>
          <ul>
                  { this.props.todos.map((todo,i) => {
                      return <div className={this.state.underline ? 'underline' : 'noUnderline '} key={i}>{ todo }<div onClick={()=>{this.setState({underline:true})}}>completed</div><button onClick={() => { this.removeItem(todo, i)}}>X</button></div>
                   
                  })}
                  
              </ul>
        </div>
      );
    }
  }
  
  export default TodoList;

  