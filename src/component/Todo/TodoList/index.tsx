import { Todo } from "../../../interface/todoList";
import "./style.scss";
function TodoList(props: any) {
  const { todos, handleDeleteTodo, handleComplete } = props;

  return (
    <>
      <ul className="todo__list">
        {todos.map((todo: Todo, index: number) => (
          <li key={index} className="todo__item">
            <span
              className={`todo__task ${
                todo.complete ? "todo__task--completed" : ""
              }  `}
              onClick={() => handleComplete(index)}
            >
              {todo.task}
            </span>
            <div className="todo__actions">
              <span
                className="todo__btn--del k-icon k-i-delete"
                onClick={() => handleDeleteTodo(index)}
              ></span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
