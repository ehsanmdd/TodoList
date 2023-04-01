import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { todoType } from "./TodoContainer";


interface Props {
  toggleComplete: (id: string) => void;
  todo: todoType;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

function Todo ({ todo, toggleComplete, deleteTodo, editTodo }: Props) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.todo}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
