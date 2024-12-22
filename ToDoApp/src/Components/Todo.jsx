import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, seTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const total = todos.length;

  return (
    <div>
      <Form todos={todos} seTodos={seTodos} />
      <TodoList todos={todos} seTodos={seTodos} />
      <Footer completed={completed} total={total} />
    </div>
  );
}
