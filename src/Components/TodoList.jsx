import React from 'react'
import ToDoItem from './ToDoItem';
import styles from './todolist.module.css';

export default function TodoList ({todos, setToDos}) {
  const sortedToDos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
      {sortedToDos.map((item)=>
         (
         <ToDoItem key={item.name} item = {item} todos={todos} setToDos={setToDos}/>
         ))}
    </div>
  )
}


