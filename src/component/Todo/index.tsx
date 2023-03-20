import { useState } from "react";
import data from "../../dataMock/todoData.json";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./style.scss";

function Todo() {
  const initialData = data;
  const [todos, setTodos] = useState(initialData);
  const handleAddTodoForm = (value: string) => {
    if (value === "") return;
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        task: value,
        complete: false,
      },
    ];
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      complete: !newTodos[index].complete,
    };
    setTodos(newTodos);
  };
  return (
    <div>
      <div className="todo">
        <h2 className="todo__header">Todo List</h2>
        <TodoForm handleAddTodoForm={handleAddTodoForm} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default Todo;
