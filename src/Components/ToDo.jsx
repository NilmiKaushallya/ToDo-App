import React, { useState } from 'react'

import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

const ToDo = () => {

  const [todos, setToDos] = useState([]);
 const completedToDos =  todos.filter ((todo)=> todo.done).length
 const totalToDos = todos.length


  return (
    <div>
      <Form todos={todos} setToDos={setToDos}/>
      <TodoList todos={todos} setToDos = {setToDos}/>
       <Footer completedToDos= {completedToDos} totalToDos = {totalToDos} />
    </div>
  )
}

export default ToDo
