import React from 'react'
import ToDoItem from './ToDoItem';
import styles from './todolist.module.css';

export default function TodoList ({todos}) {
  return (
    <div className={styles.list}>
      {todos.map((item)=>
         (
         <ToDoItem key={item} item = {item}/>
         ))}
    </div>
  )
}


