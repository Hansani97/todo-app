import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import axios from "axios";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [toDo, setTodo] = useState([]);

  const date = new Date();

  useEffect(() => {
    getAllTodo();
  }, [toDo]);

  const getAllTodo = () => {
    axios.get("http://localhost:5000").then(({ data }) => {
      console.log("data : ", data);
      setTodo(data);
    });
  };
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header text-center">
        <h3>To Do List</h3>
        <button
          className="btn btn-primary btn-sm mt-2"
          onClick={() => setModal(true)}
        >
          + Add Task
        </button>
      </div>

      <div className="task-container">
        <h5>All Task</h5>
        <p>{date.toDateString()}</p>
        <div className="task-item">
          {toDo &&
            toDo.map((obj, index) => (
              <Card
                taskObj={obj}
                key={index}
                index={index}
                getAllTodo={getAllTodo}
              />
            ))}
        </div>
      </div>
      <div className="footer">
        Every task completed is a small victory. Keep going💪!
      </div>

      <CreateTask modal={modal} toggle={toggle} getAllTodo={getAllTodo}/>
    </>
  );
};

export default ToDoList;
