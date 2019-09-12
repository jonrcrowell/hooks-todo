import React, { useState } from "react";
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

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function createTodoAtIndex(e, i) {
    const newTodo = [
      {
        content: "",
        isCompleted: false
      }
    ];
    const newTodos = [...todos, ...newTodo];

    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function toggleTodoCompleteAtIndex(i) {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isCompleted = !temporaryTodos[i].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <header className="header">
        <form className="todo-list">
          {todos.map((todo, i) => (
            <div
              key={i}
              className={`todo ${todo.isCompleted && "todo-is-completed"}`}
            >
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(i)}
              >
                {todo.isCompleted && <span>&#x2716;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </form>
      </header>
    </div>
  );
}

export default App;
