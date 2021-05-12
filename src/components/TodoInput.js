import React, { useState } from "react";
import { v4 } from "uuid";

const TodoInput = ({ todos, setTodos }) => {
  const [userInput, setUserInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput === "") {
      return alert("Empty input");
    }
    const todo = {
      task: userInput,
      id: v4()
    };
    // makiong new todo object and inserting it an todos array
    setTodos([...todos, todo]);
    setUserInput("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo"
          value={userInput}
          // onChange
          // value state
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;
