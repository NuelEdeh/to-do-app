import React, { useState } from "react";
import "./App.css";
// importing components
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Nuel's Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
