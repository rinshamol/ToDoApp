import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Todo from "./Components/Todo";
import Header from "./Components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Todo />
  </React.StrictMode>
);
