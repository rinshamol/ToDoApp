import style from "./TodoItem.module.css";
export default function TodoItem({ item, todos, seTodos }) {
  function handleDelete(item) {
    console.log(item.name + " deleted");
    seTodos(todos.filter((todo) => todo != item));
  }
  function handleClick(name) {
    console.log("clicked item:" + name);
    seTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const clicked = item.done ? style.checked : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={clicked} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deletebtn}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
