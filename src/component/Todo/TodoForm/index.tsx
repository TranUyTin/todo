import { useState } from "react";
import { CONSTANT } from "../../../constant/constant";
import "./style.scss";

function TodoForm(props: any) {
  const { handleAddTodoForm } = props;
  const [value, setValue] = useState("");
  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (value: string) => {
    handleAddTodoForm(value);
    setValue("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    value: string
  ) => {
    if (event.keyCode === CONSTANT.ENTER_KEYCODE) {
      handleAddTodoForm(value);
      setValue("");
    }
  };

  return (
    <>
      <div className="todo__form">
        <input
          type="text"
          placeholder="Enter your todo"
          value={value}
          onChange={handleOnChange}
          onKeyDown={(event) => handleKeyDown(event, value)}
        />
        <span
          className="todo__btn--add k-icon k-i-plus"
          onClick={() => handleAddTodo(value)}
        ></span>
      </div>
    </>
  );
}

export default TodoForm;
