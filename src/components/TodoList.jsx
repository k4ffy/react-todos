import React from 'react';
import { useSelector } from 'react-redux';
import EmptyListUI from './EmptyListUI';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul className="todo__list todo-list">
      {todos.length > 0 ? (
        todos
          .slice(0)
          .reverse()
          .map((obj) => <TodoItem key={obj.id} {...obj} />)
      ) : (
        <EmptyListUI />
      )}
    </ul>
  );
};

export default TodoList;
