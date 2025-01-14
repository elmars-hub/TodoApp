/* eslint-disable react/prop-types */
import { useMemo } from "react";

function Filters({ todos, status, setStatus, onClear }) {
  // ✅ Optimized: Calculate `itemsLeft` using useMemo instead of useEffect
  const itemsLeft = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos]
  );

  function handleAll() {
    setStatus("all");
  }

  function handleActive() {
    setStatus("active");
  }

  function handleCompleted() {
    setStatus("completed");
  }

  return (
    <div>
      <div
        className={`sm:shadow-2xl text-base flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 bg-white dark:bg-dark-desatBlue text-light-grayishBlue dark:text-dark-darkGrayishBlue rounded-b-md`}
      >
        <p className="max-w-[100px] w-full">{itemsLeft} items left</p>
        <div className=" hidden sm:flex items-center justify-center gap-4 bg-white dark:bg-dark-desatBlue font-bold text-light-grayishBlue dark:text-dark-darkGrayishBlue">
          <button
            onClick={handleAll}
            className={`${
              status === "all" ? "text-bright-blue" : ""
            } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
          >
            All
          </button>
          <button
            onClick={handleActive}
            className={`${
              status === "active" ? "text-bright-blue" : ""
            } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
          >
            Active
          </button>
          <button
            onClick={handleCompleted}
            className={`${
              status === "completed" ? "text-bright-blue" : ""
            } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
          >
            Completed
          </button>
        </div>
        <button
          onClick={onClear}
          className="hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300"
        >
          Clear Completed
        </button>
      </div>
      <div className="sm:hidden shadow-2xl mt-4 px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-center gap-4 bg-white dark:bg-dark-desatBlue font-bold text-light-grayishBlue dark:text-dark-darkGrayishBlue rounded-b-md">
        <button
          onClick={handleAll}
          className={`${
            status === "all" ? "text-bright-blue" : ""
          } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
        >
          All
        </button>
        <button
          onClick={handleActive}
          className={`${
            status === "active" ? "text-bright-blue" : ""
          } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
        >
          Active
        </button>
        <button
          onClick={handleCompleted}
          className={`${
            status === "completed" ? "text-bright-blue" : ""
          } hover:text-light-darkGrayishBlue hover:dark:text-dark-lightGrayishBlueHover transition-colors duration-300`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Filters;
