import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {/* looping on our todos array to create individual todo */}
      {todos.map((todo) => {
        return (
          <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        );
      })}
    </div>
  );
};

export default TodoList;
