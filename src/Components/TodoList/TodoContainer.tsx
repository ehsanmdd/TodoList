import React, { useState, useReducer, useId } from "react";
import EditTodo from "./EditTodo";
import Form from "./Form";
import Todo from "./Todo";


export interface todoType {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
};

interface actionProp {
  type: "ADD_TODO" | "DELETE_TODO" | "TOGGLE_COMPLETE_TODO" | 'EDIT_TODO' | "EDIT_TASK_TODO";
  payload: any;
}

const reducer = (state: any, action: actionProp) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo: todoType) => todo.id !== action.payload)
      };
    case 'TOGGLE_COMPLETE_TODO':
      return {
        todos: state.todos.map((todo: todoType) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
      };
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo: todoType) => todo.id === action.payload ? { ...todo, isEditing: !todo.isEditing } : todo)
      };
    case 'EDIT_TASK_TODO':
      return {
        todos: state.todos.map((todoItem: todoType) => todoItem.id === action.payload.y ? { ...todoItem , todo:action.payload.x, isEditing: !todoItem.isEditing } : todoItem)
      };

    default:
      return {
        state
      };
  }
}

function TodoContainer() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  // const [todos, setTodos] = useState<todoType[]>([]);
  const idx = useId()

  const addTodo = (todo: string) => {
    let newTodo: todoType = {
      id: idx,
      title: todo,
      completed: false,
      isEditing: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleComplete = (id: string) => {
    dispatch({type: "TOGGLE_COMPLETE_TODO", payload:id});
  };

  const editTodo = (id: string) => {
    dispatch({type : "EDIT_TODO" , payload:id});
  };

  const deleteTodo = (id: string) => {
    dispatch({type : "DELETE_TODO" , payload:id});
  };

  const editTask = (todo: string, id: string) => {
    dispatch({type : "EDIT_TASK_TODO" , payload:{x:todo,y:id}, });
  };

  return (
    <div className="TodoContainer">
      <Form addTodo={addTodo} />
      {state.todos.map((todo: todoType) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} todo={todo} key={todo.id} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoContainer;
