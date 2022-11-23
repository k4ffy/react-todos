import Tabs from './components/Tabs';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <h1 className="header__title title">react todos</h1>
        </div>
      </header>
      <main className="main">
        <section className="todo">
          <div className="todo__container">
            <TodoForm />

            <div className="todo__content">
              <Tabs />
              <TodoList />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
