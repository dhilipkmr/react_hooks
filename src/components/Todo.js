import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  // const [todoState, setTodoState] = useState({ userInput: '', todoList:[]});

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/typicode/demo/master/db.json').then((res) => {
      const todos = [];
      res.data.comments.forEach((comment) => {
        todos.push(comment.body);
      });
      setTodoList(todos);
    });
  }, []);

  const mousemoveHandler =  (e) => console.log(e.clientX, e.clientY);

  useEffect(() => {
    document.addEventListener('mousemove', mousemoveHandler);
    return () => document.removeEventListener('mousemove', mousemoveHandler);
  });

  const inputChanger = (e) => {
    setTodo(e.target.value);
  }

  const todoAdder = () => {
    setTodoList(todoList.concat(todo));
    setTodo('');
  }

  return (<React.Fragment>
    <input type="text" placeholder="todo" onChange={inputChanger} value={todo}/>
    <button type="button" onClick={todoAdder}>Add</button>
    <ul>
      {todoList.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  </React.Fragment>);
}
export default todo;
