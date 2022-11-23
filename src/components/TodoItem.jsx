import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo } from '../redux/actions/todoActions';

const TodoItem = ({ id, title, descr, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-list__item todo-item">
      <div className="todo-item__checkbox">
        <input
          onClick={() => dispatch(toggleCompletedTodo(id))}
          defaultChecked={completed}
          type="checkbox"
        />
        <div className="checkbox" />
      </div>

      <div className="todo-item__body">
        <div className="todo-item__title">{title}</div>

        <p className="todo-item__descr">{descr}</p>
      </div>

      <div className="todo-item__actions">
        <button className="todo-item__edit" />
        <button className="todo-item__remove" />
      </div>
    </li>
  );
};

export default TodoItem;
