import React from 'react'
import styles from './todoitem.module.css'

const ToDoItem = ({item, todos, setToDos}) => {
  function handleDelete(item){   
  setToDos( todos.filter((todo)=>todo!==item));
  }

  function handleClick(name){
    const newArray =todos.map((todo)=>
      todo.name === name ? {...todo, done:!todo.done}: todo )
    setToDos(newArray)
    console.log(todos)
  }

  const className = item.done ? styles.completed : ""

  return (
    <div className= {styles.item}>
      <div className={ styles.itemName}>
        <span className={className} onClick={()=>handleClick(item.name)}> 
           {item.name}

        </span>
          <span>
          <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button>
         </span>
         </div>
        
         <hr className={styles.line}/>
    </div>
  )
}

export default ToDoItem
