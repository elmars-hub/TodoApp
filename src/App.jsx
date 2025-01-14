import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    // Check the system's color scheme preference on initial load
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // get todo to localstorage
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (localTodos.length !== 0) {
      setTodos(localTodos);
    }
    // Listen for changes in the system's color scheme preference and update darkMode accordingly
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-full h-screen sm:text-lg overflow-x-hidden px-6 bg-light-gray dark:bg-dark-blue bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark bg-no-repeat bg-[length:100vw_30vh] sm:bg-[length:100vw_37.5vh] dark:bg-[length:100vw_30vh] dark:sm:bg-[length:100vw_37.5vh]`}
    >
      <div className="max-w-[540px] mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
