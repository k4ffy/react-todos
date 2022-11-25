import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/appActions';

const Tabs = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.app.currentFilter);

  return (
    <div className="todo__tabs todo-tabs">
      <div className="todo-tabs__wrapper">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`todo-tabs__item ${
            currentFilter === 'all' ? 'active' : ''
          }`}
        >
          <span className="todo-tabs__text">All</span>
          <span className="todo-tabs__counter">0</span>
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={`todo-tabs__item ${
            currentFilter === 'active' ? 'active' : ''
          }`}
        >
          <span className="todo-tabs__text">Active</span>
          <span className="todo-tabs__counter">0</span>
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={`todo-tabs__item ${
            currentFilter === 'completed' ? 'active' : ''
          }`}
        >
          <span className="todo-tabs__text">Completed</span>
          <span className="todo-tabs__counter">0</span>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
