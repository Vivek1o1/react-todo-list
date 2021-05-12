import { useState } from "react";
import "./styles.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";
export default function App() {
  const [todos, setTodos] = useState([{ task: "Eat food", id: v4() }]);
  // todos to hold all our todos
  return (
    <div className="App">
      <h1>TODO LIST REACT</h1>
      {/* passing our todos array into ur components */}
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
