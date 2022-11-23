import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (title.trim().length > 0) {
      dispatch(addTodo({ title, descr }));

      setTitle('');
      setDescr('');
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="todo__form todo-form">
      <div className="todo-form__input-wrapper">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          type="text"
          className="todo-form__input-title"
          placeholder="Task name here..."
        />
        <textarea
          onChange={(e) => setDescr(e.target.value)}
          value={descr}
          className="todo-form__input-descr"
          placeholder="Description"
        />
      </div>

      <div className="todo-form__footer">
        <div className="todo-form__actions">
          <button className="button" type="submit">
            Add Task
          </button>
          <button className="button button_transparent" type="reset">
            Reset form
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
