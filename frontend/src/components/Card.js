import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import axios from "axios";

const Card = ({ taskObj, index, getAllTodo }) => {
  const [modal, setModal] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#e2e9f4",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#f7e2bc",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#c6efc0",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#f5d0d1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#ddc4ef",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (id) => {
    axios
      .post("http://localhost:5000/update" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    getAllTodo();
    setModal(false);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete" + id)
      .then((result) => console.log(result))
      .catch.catch((err) => console.log(err));
    getAllTodo();
    setModal(false);
  };
  const handleDoneChange = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 5].primaryColor }}
        ></div>

        <div className="task-holder">
          <span
            className="card-header"
            style={{
              backgroundColor: colors[index % 5].secondaryColor,
              borderRadius: "10px",
            }}
          >
            <i
              className={isDone ? "fas fa-check-circle" : "far fa-circle"}
              style={{
                paddingRight: "10px",
                paddingRight: "3px",
                cursor: "pointer",
              }}
              onClick={handleDoneChange}
            ></i>
            {taskObj.title}
          </span>
          <p className="mt-3">{taskObj.description}</p>

          <div className="card-icons">
            <i
              className="far fa-edit "
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
                paddingRight: "10px",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
        <EditTask
          modal={modal}
          toggle={toggle}
          updateTask={() => updateTask(taskObj._id)}
          taskObj={taskObj}
        />
      </div>
    </>
  );
};

export default Card;
