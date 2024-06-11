import React, { useState } from 'react'

import Form from './Form';
import TodoList from './TodoList';

const ToDo = () => {

  const [todos, setToDos] = useState([]);



  return (
    <div>
      <Form todos={todos} setToDos={setToDos}/>
      <TodoList todos={todos}/>
    
    </div>
  )
}

export default ToDo
