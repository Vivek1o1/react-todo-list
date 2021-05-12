import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  // filtering our our todo
  const deleteTodo = (id) => {
    return setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div>
      <h1>
        {/* aceessing task property of our object */}
        {todo.task}
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          DEL
        </button>
      </h1>
    </div>
  );
};

export default Todo;
