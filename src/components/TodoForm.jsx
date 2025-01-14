import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoForm({ addTodo }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Add this line to prevent the default form submission behavior

    // Add this line to prevent adding empty todos
    if (!description) return;

    const newTodo = { text: description, id: Date.now(), completed: false };

    addTodo(newTodo);
    setDescription("");
  }

  return (
    <form
      className="mb-4 sm:mb-6 bg-white dark:bg-dark-desatBlue flex items-center gap-[12px] sm:gap-6 px-5 sm:px-6 py-[14px] sm:py-[18px] rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        className="w-5 h-5 appearance-none bg-transparent border-2 rounded-full border-light-lightGrayishBlue dark:border-dark-veryDarkGrayishBlue"
        type="checkbox"
        disabled
      />
      <input
        className="bg-transparent flex-1 w-full pt-1 outline-none text-light-darkGrayishBlue dark:text-dark-lightGrayishBlue placeholder:text-light-grayishBlue placeholder:dark:text-dark-darkGrayishBlue"
        placeholder="Create a new todo..."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="hidden" type="submit"></button>
    </form>
  );
}

export default TodoForm;
