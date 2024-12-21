import { useState } from "react";
import style from './Form.module.css'
export default function Form({todos,seTodos}) {
  const [todo, seTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    seTodos([...todos, todo]);
    seTodo("");
  }
  return (
    <form className={style.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.tododiv}><input className={style.todoinput}
        onChange={(e) => seTodo(e.target.value)}
        type="text"
        value={todo}
        placeholder="Enter Task.."
      />
      <button className={style.todobutton} type="submit">Add</button></div>
    </form>
  );
}
