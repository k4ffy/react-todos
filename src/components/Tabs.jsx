import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/appActions';
import { Filters } from '../redux/reducers/appReducer';

const Tabs = () => {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.app);

  const counter = useSelector((state) => {
    const todos = state.todos;

    return {
      all: todos.length,
      active: todos.filter((obj) => !obj.completed).length,
      completed: todos.filter((obj) => obj.completed).length,
    };
  });

  const Buttons = ({ value: filter, onChange }) => {
    const renderedButtons = Object.keys(Filters).map((key) => {
      const value = Filters[key];
      const handleClick = () => onChange(value);
      const className = `todo-tabs__item ${value === filter ? 'active' : ''}`;

      return (
        <button key={value} className={className} onClick={handleClick}>
          <span className="todo-tabs__text">{key}</span>
          <span className="todo-tabs__counter">{counter[Filters[key]]}</span>
        </button>
      );
    });

    return <>{renderedButtons}</>;
  };

  const onFilterChange = (filter) => {
    return dispatch(setFilter(filter));
  };

  return (
    <div className="todo__tabs todo-tabs">
      <div className="todo-tabs__wrapper">
        <Buttons value={currentFilter} onChange={onFilterChange} />
      </div>
    </div>
  );
};

export default Tabs;
