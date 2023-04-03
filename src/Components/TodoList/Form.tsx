import { useState } from "react";



interface Props {
  addTodo: (todo: string) => void;
}

function Form ({ addTodo } : Props) {
  const [value, setValue] = useState('');

  const handelSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Type a task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};

export default Form;
