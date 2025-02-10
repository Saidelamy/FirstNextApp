"use client";
import React, { useEffect, useState } from "react";

const posts = () => {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await response.json();
    setTodo(result);
  }, []);

  return <div>{todo.title}</div>;
};

export default posts;
