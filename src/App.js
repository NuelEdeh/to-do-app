import React, { useState } from "react";
import "./App.css";
// importing components
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>Nuel's Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        status={status}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
