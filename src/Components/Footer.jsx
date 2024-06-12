import React from 'react'
import styles from "./footer.module.css"
 
const Footer = ({completedToDos, totalToDos}) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed ToDos : {completedToDos}
      </span>
      <span className={styles.item}>
        Total ToDos : {totalToDos}
      </span>
    </div>
  )
}

export default Footer
