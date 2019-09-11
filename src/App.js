import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Level up to 5kyu on Code Wars",
      isCompleted: true
    },
    {
      content: "Get haircut",
      isCompleted: false
    },
    {
      content: "Build react todo app with hooks",
      isCompleted: false
    },
    {
      content: "Get foot x-rayed",
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <header className="header">
        <form className="todo-list">
          {todos.map((todo, i) => (
            <ul>
              <div className="todo">
                <div className="checkbox"></div>
                <input type="text" value={todo.content} />
              </div>
            </ul>
          ))}
        </form>
      </header>
    </div>
  );
}

export default App;
