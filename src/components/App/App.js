import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import AddTodo from '../AddTodo/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some mile' },
      { id: 2, content: 'Play mario Kart' }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      // todos: todos  === todos
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
