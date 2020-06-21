import React from 'react';
import './App.css';
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="content">
      <header className="header">
        <h1 className="header__title">TODO</h1>
      </header>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
