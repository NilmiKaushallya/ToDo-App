import React from 'react'
import ToDoItem from './ToDoItem';

export default function TodoList ({todos}) {
  return (
    <div>
      {todos.map((item)=>
         (
         <ToDoItem key={item} item = {item}/>
         ))}
    </div>
  )
}


