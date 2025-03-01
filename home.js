import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
