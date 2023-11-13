// import React from "react";
import styles from "./ToDoItem.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function ToDoItem({ task, onComplete, onDelete }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.content}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={25} />
      </button>
    </div>
  );
}
