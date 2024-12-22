import { useState } from "react";
import style from "./Form.module.css";
export default function Form({ todos, seTodos }) {
  const [todo, seTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    seTodos([...todos, todo]);
    seTodo({ name: "", done: false });
  }
  return (
    <form className={style.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.tododiv}>
        <input
          className={style.todoinput}
          onChange={(e) => seTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter Task.."
        />
        <button className={style.todobutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
