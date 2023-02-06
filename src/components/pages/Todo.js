import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Add or Delete To-do items!' },
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, { id: todos.length + 1, text }];
        setTodos(newTodos);
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      };

    return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(e.target.todo.value);
        e.target.todo.value = '';
      }}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todo;