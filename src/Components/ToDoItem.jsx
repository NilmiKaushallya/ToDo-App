import React from 'react'
import styles from './todoitem.module.css'

const ToDoItem = ({item}) => {
  return (
    <div className= {styles.item}>
      <div className={ styles.itemName}>
          {item}  <span>
          <button className={styles.deleteButton}>X</button>
         </span>
         </div>
        
         <hr className={styles.line}/>
    </div>
  )
}

export default ToDoItem
