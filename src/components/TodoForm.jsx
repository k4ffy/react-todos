import React from 'react';

const Form = () => {
  return (
    <form className="todo__form todo-form">
      <div className="todo-form__input-wrapper">
        <input
          required
          type="text"
          name="todo-title"
          className="todo-form__input-title"
          placeholder="Task name here..."
        />
        <textarea
          name="todo-descr"
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
