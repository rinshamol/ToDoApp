import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
export default function TodoList({ todos, seTodos }) {
  const duplicate = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {duplicate.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} seTodos={seTodos} />
      ))}
    </div>
  );
}
