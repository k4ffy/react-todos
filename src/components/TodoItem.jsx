import React from 'react';

const TodoItem = () => {
  return (
    <li className="todo-list__item todo-item">
      <div className="todo-item__checkbox">
        <input type="checkbox" />
        <div className="checkbox" />
      </div>

      <div className="todo-item__body">
        <div className="todo-item__title">Todo title</div>

        <p className="todo-item__descr">Todo description</p>
      </div>

      <div className="todo-item__actions">
        <button className="todo-item__edit" />
        <button className="todo-item__remove" />
      </div>
    </li>
  );
};

export default TodoItem;
