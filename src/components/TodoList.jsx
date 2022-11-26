import React from 'react';
import { useSelector } from 'react-redux';
import EmptyListUI from './EmptyListUI';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.app.currentFilter);

  const filteredTodos = todos.filter((obj) => {
    if (filter === 'active') {
      return !obj.completed;
    } else if (filter === 'completed') {
      return obj.completed;
    }

    return obj;
  });

  return (
    <ul className="todo__list todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos
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
