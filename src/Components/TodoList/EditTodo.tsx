import { useState } from "react";
import { todoType } from "./TodoContainer";



interface Props  {
  editTodo: (todo: string, id: string) => void
  todo : todoType
}

function EditTodo ({ editTodo, todo}: Props) {
  const [value, setValue] = useState(todo.title);

  const handelSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      editTodo(value, todo.id);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}

export default EditTodo;
