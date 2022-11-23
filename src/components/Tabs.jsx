import React from 'react';

const Tabs = () => {
  return (
    <div className="todo__tabs todo-tabs">
      <div className="todo-tabs__wrapper">
        <a href="#/" className="todo-tabs__item active">
          <span className="todo-tabs__text">All</span>
          <span className="todo-tabs__counter">0</span>
        </a>
        <a href="#/active" className="todo-tabs__item">
          <span className="todo-tabs__text">Active</span>
          <span className="todo-tabs__counter">0</span>
        </a>
        <a href="#/completed" className="todo-tabs__item">
          <span className="todo-tabs__text">Completed</span>
          <span className="todo-tabs__counter">0</span>
        </a>
      </div>
    </div>
  );
};

export default Tabs;
