import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCompletedTodos } from '../redux/actions/todoActions';

const Actions = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector((state) => {
    return state.todos.filter((obj) => obj.completed);
  });

  return (
    completedTodos.length > 0 && (
      <div className="todo__actions">
        <button
          onClick={() => dispatch(removeCompletedTodos())}
          className="button button_red"
        >
          Remove completed
        </button>
      </div>
    )
  );
};

export default Actions;
