import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  
  const [todos, seTodos] = useState([]);
  
  return (
    <div>
        <Form todos={todos} seTodos={seTodos} />
        <TodoList todos={todos} />
    </div>
  );
}
