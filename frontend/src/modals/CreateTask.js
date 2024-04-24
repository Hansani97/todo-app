import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getAllTodo } from "../utils/HandleApi";

const CreateTask = ({ modal, toggle , getAllTodo}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isSaveDisabled = !title.trim() || !description.trim();

  const handleSave = () => {
    axios
      .post("http://localhost:5000/add", {
        title: title,
        description: description,
      })
      .then((result) => {
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                maxlength="25"
                className="form-control"
                placeholder="Task here (max 25 characters)"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Description here"
                onChange={(e) => setDescription(e.target.value)}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleSave}
            disabled={isSaveDisabled}
          >
            {" "}
            Save Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;
