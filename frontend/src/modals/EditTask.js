import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(taskObj.title);
    setDescription(taskObj.description);
  }, []);

  const handleUpdate = (id) => {
    const updatedTask = {
      id: taskObj._id,
      title: title,
      description: description,
    };

    axios
      .put(`http://localhost:5000/update/${taskObj._id}`, updatedTask)
      .then((response) => {
        console.log("Task updated successfully:", response.data);
        updateTask(response.data);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            maxlength="25"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => handleUpdate(taskObj._id)}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
