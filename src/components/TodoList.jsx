/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems"; // Fixed import name
import { useEffect, useState } from "react";
import Filters from "./Filters";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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

  function handleOnDragEnd(e) {
    if (!e.destination) return;
    const orderedTodos = Array.from(newTodos);
    const [reorderedTodo] = orderedTodos.splice(e.source.index, 1);
    orderedTodos.splice(e.destination.index, 0, reorderedTodo);

    setTodos(orderedTodos);
  }

  return (
    <div>
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
      </div>

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
