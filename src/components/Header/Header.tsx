import React, { useState } from "react";
import styles from "./Header.module.css";
import todoLogo from "../../assets/todo.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface HeaderProps {
  onAddTask: (taskContent: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [content, setContent] = useState("");
  // function handleSubmit() {
  //   onAddTask();
  // }
  // function onChangeContent(event) {
  //   setContent(event.target.value);
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content.trim() !== "") {
      onAddTask(content);
      setContent("");
    }
  };

  // Type annotation for the event parameter
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" className={styles.logo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Add a New Task"
          value={content}
          onChange={onChangeContent}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
