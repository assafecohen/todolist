import React from 'react';
import TodoItem from './TodoItem/TodoItem';
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return <TodoItem todo={todo} deleteTodo={deleteTodo} />;
    })
  ) : (
    <p className='center'>you have no todos left</p>
  );
  return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
