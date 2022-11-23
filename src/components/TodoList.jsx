import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <ul className="todo__list todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;
