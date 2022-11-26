import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editTodo,
  removeTodo,
  toggleCompletedTodo,
} from '../redux/actions/todoActions';

const TodoItem = ({ id, title, descr, completed }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.app.currentFilter);
  const [editing, setEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [descrValue, setDescrValue] = useState(descr);

  const handleCancelEditing = () => {
    setTitleValue(title);
    setDescrValue(descr);
    setEditing(false);
  };

  const handleSaveEditing = () => {
    dispatch(editTodo({ id, title: titleValue, descr: descrValue }));
    setEditing(false);
  };

  useEffect(() => handleCancelEditing, [filter]);

  return (
    <li className={`todo-list__item todo-item ${completed ? 'completed' : ''}`}>
      {!editing && (
        <div className="todo-item__checkbox">
          <input
            onClick={() => dispatch(toggleCompletedTodo(id))}
            defaultChecked={completed}
            type="checkbox"
          />
          <div className="checkbox" />
        </div>
      )}

      <div onDoubleClick={() => setEditing(true)} className="todo-item__body">
        {editing ? (
          <>
            <input
              onChange={(e) => setTitleValue(e.target.value)}
              defaultValue={titleValue}
              data-type="title"
              placeholder="Task title"
              type="text"
            />
            <textarea
              onChange={(e) => setDescrValue(e.target.value)}
              defaultValue={descrValue}
              data-type="descr"
              placeholder="Task description"
            />

            <div className="todo-item__body-actions">
              <button onClick={handleSaveEditing} className="button">
                Save
              </button>
              <button
                onClick={handleCancelEditing}
                className="button button_transparent"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="todo-item__title">{title}</div>
            <p className="todo-item__descr">{descr}</p>
          </>
        )}
      </div>

      {!editing && (
        <div className="todo-item__actions">
          <button
            onClick={() => setEditing(true)}
            className="todo-item__edit"
          />
          <button
            onClick={() => dispatch(removeTodo(id))}
            className="todo-item__remove"
          />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
