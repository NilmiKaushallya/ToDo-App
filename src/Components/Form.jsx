import React from 'react'
import { useState } from 'react';
import styles from './form.module.css';

export default function Form  ({todos, setToDos})  {
    //const [todo, setToDo] = useState("");
    const [todo, setToDo] = useState({name:"", done:false});
    


    function handleSubmit (e) {
        e.preventDefault();
        setToDos([...todos, todo]);
        setToDo({name:"", done:false});
       
      }
  return (
    <div>
      <form className={styles.todoform}  onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input className={styles.modernInput} 
        onChange = {(e) => setToDo({name: e.target.value, done: false})} 
        value = {todo.name} 
        type= "text"
        placeholder='Enter todo Item'/>
        <button className={styles.modernButton} type = "submit">Add</button>
        </div>
      </form>
    </div>
  )
}


