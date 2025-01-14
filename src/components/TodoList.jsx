/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems"; // Fixed import name
import { useEffect, useState } from "react";
import Filters from "./Filters";

function TodoList({ todos, setTodos }) {
  const [status, setStatus] = useState("all");
  const [newTodos, setNewTodos] = useState(todos); // Initialize with todos

  useEffect(() => {
    switch (status) {
      case "active":
        setNewTodos(todos.filter((todo) => !todo.completed)); // Simplified condition
        break;
      case "completed":
        setNewTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setNewTodos(todos);
    }
  }, [todos, status]);

  function handleClear() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <div className="bg-white dark:bg-dark-desatBlue rounded-t-md">
      {newTodos.map((todo, index) => (
        <TodoItems // Fixed import name
          key={todo.id}
          index={index}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />
      ))}

      <Filters
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        onClear={handleClear}
      />
    </div>
  );
}

export default TodoList;
