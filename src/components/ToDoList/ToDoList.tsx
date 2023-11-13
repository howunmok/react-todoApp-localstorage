// import React from "react";
import styles from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
import noTaskLogo from "../../assets/no-task.png";

export default function ToDoList({ tasks, onComplete, onDelete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed Tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>
      {tasksQuantity === 0 ? (
        <div className={styles.noTasks}>
          <img src={noTaskLogo} alt="No Tasks" width={150} />
          <p className={styles.noTaskMsg}> No Todos Found</p>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
