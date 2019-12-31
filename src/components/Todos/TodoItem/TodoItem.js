import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className='collection-item' key={todo.id}>
      <span
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        {todo.content}
      </span>
    </div>
  );
};

export default TodoItem;
